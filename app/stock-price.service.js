"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { Http, URLSearchParams, Response } from '@angular/http';
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var StockPriceService = (function () {
    function StockPriceService(_jsonp) {
        this._jsonp = _jsonp;
        this.stockPriceUrl = './data/barchart-prices.json'; // URL to web api
    }
    StockPriceService.prototype.getStockPrices = function () {
        var params = new http_1.URLSearchParams();
        params.set('apikey', "356ba7050d323b64099866b3a87b3f9b");
        params.set('symbols', "CL*1,NG*1,SD,CHK,EOG,NFX,DVN,XEC,MRO");
        params.set('callback', "JSONP_CALLBACK");
        // let stockPriceUrl = "./data/barchart-prices.json"
        var stockPriceUrl = "http://ondemand.websol.barchart.com/getQuote.jsonp";
        // let stockPriceUrl = "http://ondemand.websol.barchart.com/getQuote.json?apikey=356ba7050d323b64099866b3a87b3f9b&symbols=CL*1,NG*1,SD,CHK,EOG,NFX,DVN,XEC,MRO"
        return this._jsonp.get(stockPriceUrl, { search: params })
            .map(function (response) { return response.json().results; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    StockPriceService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    StockPriceService.prototype.getStockPrices2 = function () {
        return this._jsonp.get(this.stockPriceUrl)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    StockPriceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], StockPriceService);
    return StockPriceService;
}());
exports.StockPriceService = StockPriceService;
//# sourceMappingURL=stock-price.service.js.map