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
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule,} from '@angular/material/form-field';
import {MatCardModule,} from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  
        
  
  
];


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
    HttpClientModule,
    [...modules],
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  exports: [
    [...modules]
   
  ],
  providers: [ 
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ,ProductapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
