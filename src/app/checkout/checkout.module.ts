import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutRoutes as routes } from './checkout.routes';

@NgModule({
  imports: [
  	RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [CartComponent]
})
export class CheckoutModule { }
