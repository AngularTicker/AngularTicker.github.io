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
var oil_price_1 = require('./oil-price');
var OilPriceComponent = (function () {
    function OilPriceComponent() {
        this.historySvg = [];
    }
    OilPriceComponent.prototype.ngOnInit = function () {
        this.previousDayClose = this.oilPrice.history[0];
        this.change = parseFloat((this.oilPrice.price - this.previousDayClose).toFixed(3));
        this.percent = parseFloat((100 * this.change / this.previousDayClose).toFixed(3));
        this.priceHistoryString = this.getPriceHistoryString(true);
    };
    OilPriceComponent.prototype.getPriceHistoryString = function (includeOrigin) {
        var priceHistoryString;
        //truncate array after 14 values
        var historyLength = this.oilPrice.history.length;
        if (historyLength > 14) {
            historyLength = 14;
            this.oilPrice.history = this.oilPrice.history.slice(0, 13);
        }
        // //determine min, max and variance
        // let min = Math.min(...this.oilPrice.history)
        // let minPercent = 100 * min / this.oilPrice.history[historyLength - 1]
        // let max = Math.min(...this.oilPrice.history)
        // let maxPercent = 100 * min / this.oilPrice.history[historyLength - 1]
        // let variance = maxPercent - minPercent
        //determine min, max and variance
        var priceBaseLine = this.oilPrice.history[historyLength - 1];
        this.min = Math.min.apply(Math, this.oilPrice.history);
        this.max = Math.max.apply(Math, this.oilPrice.history);
        this.variance = this.max - this.min;
        this.variancePercent = 100 * this.variance / priceBaseLine;
        //set sparkline variance based on percent change
        this.sparklineVariance = 5;
        this.topMargin = 10;
        this.bottomMargin = 10;
        if (this.variancePercent > 10) {
            this.sparklineVariance = 10;
            this.topMargin = 7;
            this.bottomMargin = 8;
        }
        if (this.variancePercent > 25) {
            this.sparklineVariance = 15;
            this.topMargin = 5;
            this.bottomMargin = 5;
        }
        if (this.variancePercent > 40) {
            this.sparklineVariance = 20;
            this.topMargin = 2;
            this.bottomMargin = 3;
        }
        if (this.variancePercent > 60) {
            this.sparklineVariance = 25;
            this.topMargin = 0;
            this.bottomMargin = 0;
        }
        //interpolate, invert and truncate history value for svg
        var svgValue;
        for (var i = 0; i < this.oilPrice.history.length; i++) {
            var p = this.oilPrice.history[i];
            svgValue = Math.floor((this.sparklineVariance - (((p - this.min) / this.variance) * this.sparklineVariance))) + this.bottomMargin;
            this.historySvg.push(svgValue);
        }
        //once more for current price
        svgValue = Math.floor((this.sparklineVariance - (((this.oilPrice.price - this.min) / this.variance) * this.sparklineVariance))) + this.bottomMargin;
        this.historySvg.push(svgValue);
        //create svg string
        priceHistoryString = "";
        var x = 0;
        for (var i = historyLength; i >= 0; i--) {
            if (i < historyLength) {
                priceHistoryString = priceHistoryString + ",";
            }
            priceHistoryString = priceHistoryString + x.toString().trim() + "," + this.historySvg[i].toString().trim();
            x = x + 5;
        }
        if (includeOrigin === true) {
            priceHistoryString = "0,25," + priceHistoryString + ",70,25";
        }
        console.log(priceHistoryString);
        // priceHistoryString = "0,25,0,15,5,14,10,13,15,13,20,12,25,12,30,12,35,12,40,13,45,14,50,12,55,12,60,12,65,11,70,11,70,25"
        //return svg string
        return priceHistoryString;
    };
    OilPriceComponent.prototype.isChangePositive = function () {
        return this.change >= 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof oil_price_1.OilPrice !== 'undefined' && oil_price_1.OilPrice) === 'function' && _a) || Object)
    ], OilPriceComponent.prototype, "oilPrice", void 0);
    OilPriceComponent = __decorate([
        core_1.Component({
            selector: 'oil-price',
            templateUrl: 'app/oil-price.component.html',
            styleUrls: ['app/oil-price.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], OilPriceComponent);
    return OilPriceComponent;
    var _a;
}());
exports.OilPriceComponent = OilPriceComponent;
//# sourceMappingURL=oil-price.component.js.map