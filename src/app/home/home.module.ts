import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
//rutas
import { HomeRoutes as routes } from './home.routes';

@NgModule({
  imports: [
  	RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
	  HomeComponent,
	  SliderComponent
  ]
})
export class HomeModule { }
