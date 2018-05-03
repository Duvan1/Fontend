import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtuctDetailsComponent } from './protuct-details/protuct-details.component';
import { ProductComponent } from './product.component';
import { ProductRoutes as routes } from './product.routes';
import { RouterModule } from '@angular/router';
import { ProductPriceInfoComponent } from './protuct-details/product-price-info/product-price-info.component';
import { ProductDescriptionComponent } from './protuct-details/product-description/product-description.component';

@NgModule({
  imports: [
  	RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ProtuctDetailsComponent, ProductComponent, ProductPriceInfoComponent, ProductDescriptionComponent]
})
export class ProductModule { }
