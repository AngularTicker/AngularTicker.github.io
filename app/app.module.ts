import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import { OilPriceListComponent } from './oil-price-list.component'
import { OilPriceComponent } from './oil-price.component'
import { TestComponent } from './test.component'
import { OilPriceCompositeComponent } from './oil-price-composite.component'
import { StockPriceListComponent } from './stock-price-list.component'

import { StockPriceComponent } from './stock-price.component'
import { MyCarouselComponent } from './my-carousel.component'


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, Ng2BootstrapModule ],
  declarations: [ AppComponent, OilPriceListComponent, OilPriceComponent, TestComponent, OilPriceCompositeComponent, StockPriceListComponent, StockPriceComponent, MyCarouselComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule  { }
