import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from'./home/home.component';
import {ModuleWithProviders} from "@angular/core";


export const appRoutes: Routes = [
	{ path: '', redirectTo: '/gallery', pathMatch: 'full' },
	{ path: '',	component: HomeComponent
	//loadChildren: './home/home.module#HomeModule' 
	},
];

export const routes:ModuleWithProviders= RouterModule.forRoot(appRoutes);