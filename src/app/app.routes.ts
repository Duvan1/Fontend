import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from'./home/home.component';
import {ModuleWithProviders} from "@angular/core";


export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent }
];

export const routes:ModuleWithProviders= RouterModule.forRoot(appRoutes);