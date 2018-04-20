import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    LoadingIndicatorComponent,
    LoginComponent
  ],
  declarations: [LoadingIndicatorComponent, LoginComponent]
})
export class SharedModule { }
