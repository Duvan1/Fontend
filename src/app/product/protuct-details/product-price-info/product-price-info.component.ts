import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.css']
})
export class ProductPriceInfoComponent implements OnInit {
	@Input() productName: any;
	@Input() productPrice: any;

  constructor() { }

  ngOnInit() {
  }

}
