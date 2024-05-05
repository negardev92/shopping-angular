import { Component, Input, OnInit } from '@angular/core';
import { UserBasket } from '../models/UserBasket';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  isShowing: boolean;
  @Input() list: [];

  cartTotal: number;

  constructor() { }

  ngOnInit(): void {
  }
  callMethods() {
    this.toggle();

  }

  toggle() {
    this.isShowing = !this.isShowing;
  }

  removeItem(index) {
    this.list.splice(index, 1);
  }

  getTotalPrice(userbaskets: UserBasket[]) {
    let totalAmount = 0;

    userbaskets.forEach(basket => {
      totalAmount = totalAmount + (basket.price * basket.count);
    });

    return totalAmount;
  }
}
