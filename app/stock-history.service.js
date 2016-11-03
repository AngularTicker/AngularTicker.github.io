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
// import { Http, Response } from '@angular/http';
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var StockHistoryService = (function () {
    function StockHistoryService(_jsonp) {
        this._jsonp = _jsonp;
    }
    StockHistoryService.prototype.getStockHistory = function (symbol) {
        var params = new http_1.URLSearchParams();
        params.set('apikey', "356ba7050d323b64099866b3a87b3f9b");
        params.set('symbol', symbol);
        params.set('type', "daily");
        params.set('startDate', "20161001");
        params.set('callback', "JSONP_CALLBACK");
        var stockHistoryUrl = "http://ondemand.websol.barchart.com/getHistory.jsonp";
        // return this._jsonp.get('./data/barchart-history-' + symbol +'.json')
        return this._jsonp.get(stockHistoryUrl, { search: params })
            .map(function (response) { return response.json().results; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    StockHistoryService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    StockHistoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], StockHistoryService);
    return StockHistoryService;
}());
exports.StockHistoryService = StockHistoryService;
//# sourceMappingURL=stock-history.service.js.map