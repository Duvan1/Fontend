import { Component, OnInit } from '@angular/core';
import { Product } from './../../core/models/product';
import { ProductGummyService } from './../../core/service/product-gummy.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<any>;

  constructor(private productGummyService: ProductGummyService ) { }

  ngOnInit() {
  	this.products$ = this.productGummyService.getProducts();
  	//console.log("this.products");
  }

}
