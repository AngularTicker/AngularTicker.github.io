import { Injectable } from '@angular/core';
// import { Http, URLSearchParams, Response } from '@angular/http';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StockPrice, StockPriceJsonp } from './stock-price-types'

@Injectable()
export class StockPriceService {
    constructor(private _jsonp: Jsonp) { }

    getStockPrices(): Observable<StockPriceJsonp[]> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('apikey', "356ba7050d323b64099866b3a87b3f9b");
        params.set('symbols', "CL*1,NG*1,SD,CHK,EOG,NFX,DVN,XEC,MRO");
        params.set('callback', "JSONP_CALLBACK");

        // let stockPriceUrl = "./data/barchart-prices.json"
        let stockPriceUrl = "http://ondemand.websol.barchart.com/getQuote.jsonp"
        // let stockPriceUrl = "http://ondemand.websol.barchart.com/getQuote.json?apikey=356ba7050d323b64099866b3a87b3f9b&symbols=CL*1,NG*1,SD,CHK,EOG,NFX,DVN,XEC,MRO"

        return this._jsonp.get(stockPriceUrl, { search: params })
        // return this._http.get(stockPriceUrl)
            .map((response: Response) => <StockPriceJsonp[]>response.json().results)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private stockPriceUrl = './data/barchart-prices.json';  // URL to web api

    getStockPrices2(): Promise<StockPrice[]> {
          return this._jsonp.get(this.stockPriceUrl)
              .toPromise()
              .then(response => response.json().results as StockPrice[])
              .catch(this.handleError);
    }

}
