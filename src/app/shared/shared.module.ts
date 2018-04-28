import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  imports: [
    CommonModule
  ],  
  declarations: [LoadingIndicatorComponent, LoginComponent, PopupComponent, NotificationComponent],
  exports: [
    // components
    LoadingIndicatorComponent,
    LoginComponent,
    PopupComponent,
    NotificationComponent
  ],
})
export class SharedModule { }
