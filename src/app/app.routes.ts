import { RouterModule, Routes, CanActivate} from '@angular/router';
import { HomeComponent } from'./home/home.component';
import { CartComponent } from'./checkout/cart/cart.component';
import { ProductComponent } from'./product/product.component';
import {ModuleWithProviders} from "@angular/core";
import { AuthGuard } from './core/service/auth.guard';
import { AdminComponent } from './admin/admin.component';



export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule' },
    {
    	path: 'product',
    	component: ProductComponent
    },
    {
    	path: 'shopping-cart',
    	component: CartComponent
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'},
    {
        path:'admin',
        loadChildren: './admin/admin.module#AdminModule',
        //component: AdminComponent,
        canActivate:[AuthGuard]
        //loadChildren: './admin/admin.module#AdminModule',
      
    },
    { path: '**', redirectTo: '/home'}
];

export const routes:ModuleWithProviders= RouterModule.forRoot(appRoutes);