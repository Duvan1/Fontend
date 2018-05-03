import { Injectable } from '@angular/core';
 import { Product } from '../models/product';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductGummyService {

  constructor(private http:Http) { }

   getProduct(slug: string): Product {
     return Object.assign(new Product, {
       'id': 1,
       'name': 'Ruby on Rails Tote',
       'description': 'Doloribus quia minima natus dolorem sit nostrum. Explicabo id et quos odit aut laborum. Hic aut inventore est voluptas corrupti veritatis.',
       'price': '15.99',
       'display_price': '$15.99',
       'available_on': '2017-03-08T05:32:34.364Z',
       'slug': 'ruby-on-rails-tote',
       'meta_description': null,
       'meta_keywords': null,
       'shipping_category_id': 1,
       'taxon_ids': [
         3,
         11
       ],
       'stock': 5,
       'classifications': [
         {
           'taxon_id': 3,
           'taxon': {
             'id': 3,
             'name': 'Bags',
             'pretty_name': 'Categories -> Bags',
             'permalink': 'categories/bags',
             'parent_id': 1,
             'taxonomy_id': 1,
             'taxons': []
           }
         },
         {
           'taxon_id': 11,
           'position': 1,
           'taxon': {
             'id': 11,
             'name': 'Rails',
             'pretty_name': 'Brand -> Rails',
             'permalink': 'brand/rails',
             'parent_id': 2,
             'taxonomy_id': 2,
             'taxons': []
           }
         }
       ],
       'images': [
           {
             'id': 21,
             'type': 'Spree::Image',
             'alt': null,
             'mini_url': '/assets/images/d1.jpg',
             'small_url': '/assets/images/d1.jpg',
             'product_url': '/assets/images/d1.jpg',
             'large_url': '/assets/images/d1.jpg'
           },
           {
             'id': 22,
             'type': 'Spree::Image',
             'alt': null,
             'mini_url': '/assets/images/d2.jpg',
             'small_url': '/assets/images/d2.jpg',
             'product_url': '/assets/images/d2.jpg',
             'large_url': '/assets/images/d2.jpg'
           },
           {
             'id': 23,
             'type': 'Spree::Image',
             'alt': null,
             'mini_url': '/assets/images/d3.jpg',
             'small_url': '/assets/images/d3.jpg',
             'product_url': '/assets/images/d3.jpg',
             'large_url': '/assets/images/d3.jpg'
           },
           {
             'id': 24,
             'type': 'Spree::Image',
             'alt': null,
             'mini_url': '/assets/images/d4.jpg',
             'small_url': '/assets/images/d4.jpg',
             'product_url': '/assets/images/d4.jpg',
             'large_url': '/assets/images/d4.jpg'
           }
         ]
     });
   }   

   getProducts(): Observable<any> {
     return this.http.get('/assets/js/products.json').map((response:Response)=> response.json());
   }
}
