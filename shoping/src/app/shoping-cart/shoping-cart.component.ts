import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

isShowing: boolean;
@Input() list:[];

cartTotal:number;

  constructor() { }

  ngOnInit(): void {
  }
  callMethods() {
    this.toggle();
    
}
    
  toggle() {
     this.isShowing = !this.isShowing;
    
  }
  
 
  removeItem(index){
    this.list.splice(index, 1);
    
   
  }
  
  
  
  
}
