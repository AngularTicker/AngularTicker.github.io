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
var stock_price_service_1 = require('./stock-price.service');
var stock_history_service_1 = require('./stock-history.service');
var oil_price_1 = require('./oil-price');
var StockPriceListComponent = (function () {
    function StockPriceListComponent(_stockPriceService, _stockHistoryService) {
        this._stockPriceService = _stockPriceService;
        this._stockHistoryService = _stockHistoryService;
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.oilPrices = [];
        this.oilPriceGroups = [];
        this.mySlides = [0, 1, 2];
        this.stockHistoryReversed = [];
    }
    StockPriceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._stockPriceService.getStockPrices()
            .subscribe(function (sps) { return _this.stockPrices = sps; }, function (error) { return _this.errorMessage = error; }, function () {
            //     alert("this.stockPrices.length = " + this.stockPrices.length.toString())
            _this.getStockHistories();
            // this.loadOilPriceGroups()
        });
    };
    StockPriceListComponent.prototype.getStockHistories = function () {
        var _this = this;
        var _loop_1 = function(i) {
            this_1.mySymbol = this_1.stockPrices[i].symbol;
            this_1._stockHistoryService.getStockHistory(this_1.stockPrices[i].symbol)
                .subscribe(function (sps) { return _this.stockHistory = sps; }, function (error) { return _this.errorMessage = error; }, function () {
                //     alert("this.stockPrices[" + i.toString() + "].name = " + this.stockPrices[i].name.toString())
                _this.loadOilPrice(_this.stockPrices[i], i);
                _this.stockHistoryLength = _this.stockHistory.length;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.stockPrices.length; i++) {
            _loop_1(i);
        }
    };
    StockPriceListComponent.prototype.loadOilPrice = function (stockPrice, index) {
        var stockHistoryReversed = [];
        for (var j = this.stockHistory.length; j > (this.stockHistory.length - 14); j--) {
            stockHistoryReversed.push(this.stockHistory[j - 1].close);
        }
        var oilPrice = new oil_price_1.OilPrice;
        oilPrice.name = stockPrice.name;
        oilPrice.symbol = stockPrice.symbol;
        oilPrice.price = stockPrice.lastPrice;
        oilPrice.change = stockPrice.netChange;
        oilPrice.percentChange = stockPrice.percentChange;
        oilPrice.history = stockHistoryReversed;
        this.oilPrices.push(oilPrice);
        var groupIndex = Math.floor(index / 3);
        var itemIndex = index % 3;
        this.oilPriceGroups[groupIndex][itemIndex] = oilPrice;
    };
    StockPriceListComponent.prototype.loadOilPriceGroups = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.oilPriceGroups[i][j] = this.oilPrices[(i * 3) + j];
            }
        }
    };
    StockPriceListComponent = __decorate([
        core_1.Component({
            selector: 'stock-price-list',
            templateUrl: 'app/stock-price-list.component.html',
            providers: [stock_price_service_1.StockPriceService, stock_history_service_1.StockHistoryService]
        }), 
        __metadata('design:paramtypes', [stock_price_service_1.StockPriceService, stock_history_service_1.StockHistoryService])
    ], StockPriceListComponent);
    return StockPriceListComponent;
}());
exports.StockPriceListComponent = StockPriceListComponent;
//# sourceMappingURL=stock-price-list.component.js.map