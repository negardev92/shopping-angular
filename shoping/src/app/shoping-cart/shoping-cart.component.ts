import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
productitem: any;

@Input() list:[];

  constructor() { }

  ngOnInit(): void {
  }
  isShowing: boolean;

  toggle() {
     
     this.isShowing = !this.isShowing;
  }
  
  callMethods() {
      this.toggle();
  }
  
}
