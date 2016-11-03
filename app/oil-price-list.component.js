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
var OilPriceListComponent = (function () {
    function OilPriceListComponent(_oilPriceService) {
        this._oilPriceService = _oilPriceService;
        this.myInterval = 2000;
        this.noWrapSlides = false;
        this.slides = [];
        this.state = 'start';
    }
    OilPriceListComponent.prototype.myAnimation = function () {
        this.state = 'finish';
    };
    OilPriceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._oilPriceService.getOilPrices()
            .subscribe(function (ops) { return _this.oilPrices = ops; }, function (error) { return _this.errorMessage = error; });
        // this._compositionService.getCompositions2().then(comps => this.compositions = comps);
        for (var i = 0; i < 3; i++) {
            this.slides.push({
                text: "Text " + i.toString()
            });
        }
        // this.compositions = this._compositionService.getCompositions()
    };
    OilPriceListComponent.prototype.select = function (oilPrice) {
        this.selectedOilPrice = oilPrice;
    };
    OilPriceListComponent = __decorate([
        core_1.Component({
            selector: 'oil-price-list',
            templateUrl: 'app/oil-price-list.component.html',
            styleUrls: ['app/oil-price-list.component.css'],
            providers: [oil_price_service_1.OilPriceService],
            animations: [
                core_1.trigger('myTrigger', [
                    core_1.state('start', core_1.style({ transform: 'translateX(0)' })),
                    core_1.state('finish', core_1.style({ transform: 'translateX(-100)' })),
                    core_1.transition('start => finish', [core_1.animate('5s')])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [oil_price_service_1.OilPriceService])
    ], OilPriceListComponent);
    return OilPriceListComponent;
}());
exports.OilPriceListComponent = OilPriceListComponent;
//# sourceMappingURL=oil-price-list.component.js.map