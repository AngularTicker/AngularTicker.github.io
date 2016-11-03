import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core'
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';

import { OilPrice } from './oil-price'
import { OilPriceView } from './oil-price-view'
import { OilPriceService } from './oil-price.service'

@Component({
    selector: 'oil-price-composite',
    templateUrl: 'app/oil-price-composite.component.html',
    styleUrls: ['app/oil-price-composite.component.css'],
    providers: [ OilPriceService ],
})

export class OilPriceCompositeComponent implements OnInit {
    state: string = 'start'
    public oilPrices: OilPrice[] 
    // public oilPriceViewList: OilPriceView[]
    errorMessage: string;
    public selectedOilPrice: OilPrice;
    // public myOilPriceView: OilPriceView


    constructor(private _oilPriceService: OilPriceService) {
    }

    myAnimation() {
        this.state = 'finish'
    }

    ngOnInit() {
        this._oilPriceService.getOilPrices()
            .subscribe(
                ops => this.oilPrices = ops,
                error =>  this.errorMessage = <any>error
            );

        this.selectedOilPrice = this.oilPrices[0]
        
        // this._compositionService.getCompositions2().then(comps => this.compositions = comps);

        // this.oilPriceViewList = []
        // for(let i = 0; i < this.oilPrices.length; i++) {
        //     this.oilPriceViewList.push(this.getChange(this.oilPrices[i], i))
        // }

        // // this.compositions = this._compositionService.getCompositions()\
        // this.myOilPriceView = this.oilPriceViewList[0]
    } 

    select(oilPrice: OilPrice) {
        this.selectedOilPrice = oilPrice;
    }

    // getChange(oilPrice: OilPrice, index: number): OilPriceView {
    //       let op: OilPriceView
    //       op.index = index
    //       let previousDayClose = oilPrice.history[0]
    //       op.price = oilPrice.price
    //       op.change = parseFloat((oilPrice.price - previousDayClose).toFixed(3))
    //       op.percent = parseFloat((100 * op.change / previousDayClose).toFixed(3))
    //       //   let priceHistoryString = this.getPriceHistoryString(true)
    //       return op
    // }


}
