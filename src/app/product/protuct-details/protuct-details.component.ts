import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../core/models/product';
import { ProductGummyService } from './../../core/service/product-gummy.service';

@Component({
  selector: 'app-protuct-details',
  templateUrl: './protuct-details.component.html',
  styleUrls: ['./protuct-details.component.css']
})
export class ProtuctDetailsComponent implements OnInit {

  @Input() id: any;

  product: Product;

  constructor(private productGummyService: ProductGummyService ) { }

  ngOnInit() {
  	this.product = this.productGummyService.getProduct(this.id);
  	console.log(this.product.id);
  }

}
