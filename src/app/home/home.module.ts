import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
//rutas
import { HomeRoutes as routes } from './home.routes';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
  	RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
	  HomeComponent,
	  SliderComponent,
	  ContentComponent
  ]
})
export class HomeModule { }
