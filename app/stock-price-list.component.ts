import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core'
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';

import { StockPrice, StockPriceJsonp } from './stock-price-types'
import { StockHistory } from './stock-history'
import { StockPriceService } from './stock-price.service'
import { StockHistoryService } from './stock-history.service'
import { OilPrice } from './oil-price'


@Component({
    selector: 'stock-price-list',
    templateUrl: 'app/stock-price-list.component.html',
    providers: [ StockPriceService, StockHistoryService ]
})

export class StockPriceListComponent implements OnInit {
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;

    public oilPrices: OilPrice[] = []
    public oilPriceGroups: OilPrice[][] = []
    public mySlides: number[] = [0,1,2]
    public stockPrices: StockPriceJsonp[] 
    public stockPriceLength: number
    public stockHistory: StockHistory[]
    public stockHistoryLength: number
    public stockHistoryReversed: number[] = []

    public mySymbol: string 

    errorMessage: string;

    constructor(private _stockPriceService: StockPriceService,
                private _stockHistoryService: StockHistoryService) {
    }

    ngOnInit() {
        this._stockPriceService.getStockPrices()
            .subscribe(
                sps => this.stockPrices = sps,
                error =>  this.errorMessage = <any>error,
                () => {
                //     alert("this.stockPrices.length = " + this.stockPrices.length.toString())
                    this.getStockHistories()
                    // this.loadOilPriceGroups()
                }
            );
    } 

    getStockHistories() {
        for(let i = 0; i <this.stockPrices.length; i++) {
            this.mySymbol  = this.stockPrices[i].symbol

            this._stockHistoryService.getStockHistory(this.stockPrices[i].symbol)
                .subscribe(
                    sps => this.stockHistory = sps,
                    error =>  this.errorMessage = <any>error,
                    () => {
                    //     alert("this.stockPrices[" + i.toString() + "].name = " + this.stockPrices[i].name.toString())
                        this.loadOilPrice(this.stockPrices[i], i)
                    this.stockHistoryLength = this.stockHistory.length
                    }
                );

        }
    }

    loadOilPrice(stockPrice: StockPriceJsonp, index: number) {
        let stockHistoryReversed: number[] = []
        for(let j = this.stockHistory.length; j > (this.stockHistory.length - 14); j--){
            stockHistoryReversed.push(this.stockHistory[j-1].close)
        }

        let oilPrice: OilPrice = new OilPrice
        oilPrice.name = stockPrice.name
        oilPrice.symbol = stockPrice.symbol
        oilPrice.price = stockPrice.lastPrice
        oilPrice.change = stockPrice.netChange
        oilPrice.percentChange = stockPrice.percentChange
        oilPrice.history = stockHistoryReversed

        this.oilPrices.push(oilPrice)

        let groupIndex: number = Math.floor(index/3)
        let itemIndex: number = index%3
        this.oilPriceGroups[groupIndex][itemIndex] = oilPrice
    }
    
    loadOilPriceGroups() {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.oilPriceGroups[i][j] = this.oilPrices[(i*3)+j]
            }
        }
    }
}
