import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShopComponent } from './shop.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ShopComponent],
    bootstrap:    [ ShopComponent ]
})
export class ShopModule { } 
