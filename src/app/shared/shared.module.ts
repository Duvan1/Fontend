import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // components
    LoadingIndicatorComponent,
    LoginComponent,
    PopupComponent
  ],
  declarations: [LoadingIndicatorComponent, LoginComponent, PopupComponent]
})
export class SharedModule { }