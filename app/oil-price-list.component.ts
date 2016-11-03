import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core'
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';


import { OilPrice } from './oil-price'
import { OilPriceService } from './oil-price.service'

@Component({
    selector: 'oil-price-list',
    templateUrl: 'app/oil-price-list.component.html',
    styleUrls: ['app/oil-price-list.component.css'],
    providers: [ OilPriceService ],
    animations: [
        trigger('myTrigger', [
            state('start', style({transform: 'translateX(0)'})),
            state('finish',   style({transform: 'translateX(-100)'})),
            transition('start => finish', [ animate('5s') ])
        ])   
    ]
})

export class OilPriceListComponent implements OnInit {
    public myInterval:number = 2000;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];


    state: string = 'start'
    public oilPrices: OilPrice[] 
    errorMessage: string;
    selectedOilPrice: OilPrice;
    public testList: string[]

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
        
        // this._compositionService.getCompositions2().then(comps => this.compositions = comps);
        for(let i=0; i < 3; i++){
            this.slides.push ({
                text: "Text " + i.toString()
            })
        }

        // this.compositions = this._compositionService.getCompositions()
    } 

    select(oilPrice: OilPrice) {
        this.selectedOilPrice = oilPrice;
    }

}
