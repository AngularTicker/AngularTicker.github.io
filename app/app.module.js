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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('./app.component');
var oil_price_list_component_1 = require('./oil-price-list.component');
var oil_price_component_1 = require('./oil-price.component');
var test_component_1 = require('./test.component');
var oil_price_composite_component_1 = require('./oil-price-composite.component');
var stock_price_list_component_1 = require('./stock-price-list.component');
var stock_price_component_1 = require('./stock-price.component');
var my_carousel_component_1 = require('./my-carousel.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, ng2_bootstrap_1.Ng2BootstrapModule],
            declarations: [app_component_1.AppComponent, oil_price_list_component_1.OilPriceListComponent, oil_price_component_1.OilPriceComponent, test_component_1.TestComponent, oil_price_composite_component_1.OilPriceCompositeComponent, stock_price_list_component_1.StockPriceListComponent, stock_price_component_1.StockPriceComponent, my_carousel_component_1.MyCarouselComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map