import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
