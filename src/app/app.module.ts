import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ProductGummyService } from './core/service/product-gummy.service';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
//import { NotificationComponent } from './shared/components/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    //NotificationComponent
  ],
  imports: [
    routes,
    BrowserModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    ProductModule,
    CheckoutModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
