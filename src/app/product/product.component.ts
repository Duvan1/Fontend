import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	id: any;
	params: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.params = this.route.params.subscribe(params=> this.id = params['id']);
  	console.log(this.id);
  }

}
