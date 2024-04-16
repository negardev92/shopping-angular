import { Component, OnInit } from '@angular/core';
import{ProductapiService} from '../productapi.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  posts: any[];
  constructor(private productapiService:ProductapiService,) { }

  ngOnInit(): void {

    this.productapiService.getData().subscribe((data) => {this.posts = data});
  }

}
