import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from  '@angular/common/http';
import{ProductapiService} from './productapi.service';
import{AuthService} from './auth.service';

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ShopingCartComponent,
    FooterComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [ ],
  providers: [ ProductapiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
