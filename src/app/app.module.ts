import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FetchAllProductService }from './fetch-all-product.service' ;

@NgModule({
  declarations: [
    AppComponent,
    ProductcomponentComponent,
    SignupComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FetchAllProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
