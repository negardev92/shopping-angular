import { Component, Input, OnInit } from '@angular/core';
import { ProductapiService } from '../productapi.service';
import { Product } from '../models/Product';
import { UserBasket } from '../models/UserBasket';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  userbasket: UserBasket[] = [];
  items = [];

  constructor(private productapiService: ProductapiService,) { }

  ngOnInit(): void {
    this.productapiService.getData().subscribe((data) => { this.products = data });
  }

  getId(event) {
    let product: Product = this.products.find(i => i.id === event.id);

    const existingProduct = this.userbasket.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.count++;
    } else {
      this.userbasket.push({ ...product, count: 1 });
    }

    console.table(this.userbasket);
  }
}