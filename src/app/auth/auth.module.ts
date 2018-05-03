import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutes as routes } from './auth.routes';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


@NgModule({
  imports: [
  	RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthComponent]
})
export class AuthModule { }
