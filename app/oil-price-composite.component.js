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
var oil_price_service_1 = require('./oil-price.service');
var OilPriceCompositeComponent = (function () {
    // public myOilPriceView: OilPriceView
    function OilPriceCompositeComponent(_oilPriceService) {
        this._oilPriceService = _oilPriceService;
        this.state = 'start';
    }
    OilPriceCompositeComponent.prototype.myAnimation = function () {
        this.state = 'finish';
    };
    OilPriceCompositeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._oilPriceService.getOilPrices()
            .subscribe(function (ops) { return _this.oilPrices = ops; }, function (error) { return _this.errorMessage = error; });
        this.selectedOilPrice = this.oilPrices[0];
        // this._compositionService.getCompositions2().then(comps => this.compositions = comps);
        // this.oilPriceViewList = []
        // for(let i = 0; i < this.oilPrices.length; i++) {
        //     this.oilPriceViewList.push(this.getChange(this.oilPrices[i], i))
        // }
        // // this.compositions = this._compositionService.getCompositions()\
        // this.myOilPriceView = this.oilPriceViewList[0]
    };
    OilPriceCompositeComponent.prototype.select = function (oilPrice) {
        this.selectedOilPrice = oilPrice;
    };
    OilPriceCompositeComponent = __decorate([
        core_1.Component({
            selector: 'oil-price-composite',
            templateUrl: 'app/oil-price-composite.component.html',
            styleUrls: ['app/oil-price-composite.component.css'],
            providers: [oil_price_service_1.OilPriceService],
        }), 
        __metadata('design:paramtypes', [oil_price_service_1.OilPriceService])
    ], OilPriceCompositeComponent);
    return OilPriceCompositeComponent;
}());
exports.OilPriceCompositeComponent = OilPriceCompositeComponent;
//# sourceMappingURL=oil-price-composite.component.js.map