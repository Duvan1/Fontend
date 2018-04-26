import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from'./home/home.component';
import { CartComponent } from'./checkout/cart/cart.component';
import { ProductComponent } from'./product/product.component';
import {ModuleWithProviders} from "@angular/core";


export const appRoutes: Routes = [
    {
    path: '',
    component: HomeComponent },
    {
    	path: 'product',
    	component: ProductComponent
    },
    {
    	path: 'shopping-cart',
    	component: CartComponent
    }
];

export const routes:ModuleWithProviders= RouterModule.forRoot(appRoutes);