import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutes as routes } from './auth.routes';
import { RouterModule } from '@angular/router';
import {AuthService} from './../core/service/auth.service';
import { FormsModule } from '@angular/forms'



@NgModule({
  imports: [
  	RouterModule.forChild(routes),
  	FormsModule,
    CommonModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
