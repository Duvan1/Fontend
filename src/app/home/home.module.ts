import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
//rutas
import { HomeRoutes as routes } from './home.routes';
import { ContentComponent } from './content/content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ItemComponent } from './product-list/item.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
  	RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
  	ProductListComponent
  ],
  declarations: [
	  HomeComponent,
	  SliderComponent,
	  ContentComponent,
	  ProductListComponent,
	  ItemComponent,
	  ContactComponent,
	  AboutComponent
  ]
})
export class HomeModule { }
