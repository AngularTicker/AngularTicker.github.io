import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StockHistory } from './stock-history'

@Injectable()
export class StockHistoryService {
    constructor(private _jsonp: Jsonp) { }

    getStockHistory(symbol: string): Observable<StockHistory[]> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('apikey', "356ba7050d323b64099866b3a87b3f9b");
        params.set('symbol', symbol);
        params.set('type', "daily");
        params.set('startDate', "20161001");
        params.set('callback', "JSONP_CALLBACK");

        let stockHistoryUrl = "http://ondemand.websol.barchart.com/getHistory.jsonp"

        // return this._jsonp.get('./data/barchart-history-' + symbol +'.json')
        return this._jsonp.get(stockHistoryUrl, { search: params })
            .map((response: Response) => <StockHistory[]>response.json().results)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
