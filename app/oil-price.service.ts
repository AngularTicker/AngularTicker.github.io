import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { OilPrice } from './oil-price'

@Injectable()
export class OilPriceService {
  constructor(private _http: Http) { }

  getOilPrices(): Observable<OilPrice[]> {
    return this._http.get('./data/oil-price.json')
      .map((response: Response) => <OilPrice[]>response.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private oilPriceUrl = './data/oil-price.json';  // URL to web api

  getOilPrices2(): Promise<OilPrice[]> {
          return this._http.get(this.oilPriceUrl)
              .toPromise()
              .then(response => response.json().data as OilPrice[])
              .catch(this.handleError);
  }

}
