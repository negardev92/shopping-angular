import { Component, Input, OnInit } from '@angular/core';
import{ProductapiService} from '../productapi.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  userbasket= [];
  items =[] ;
  
   
  
  constructor(private productapiService:ProductapiService,) { }
  
  ngOnInit(): void {

    this.productapiService.getData().subscribe((data) => {this.products = data});
  }

  
 getId(event){
  let item = this.products.find(i => i.id === event.id);
  if(item != null){
     this.userbasket.push(item);
     console.log(this.userbasket)
  }
  let  dublicate = this.userbasket.filter((item, index) => this.userbasket.indexOf(item) !== index);
     console.log(dublicate)
   
  }
 
 }



