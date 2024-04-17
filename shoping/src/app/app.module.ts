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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ShopingCartComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
  ],
  providers: [ProductapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
