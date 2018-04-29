import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ProductGummyService } from './core/service/product-gummy.service';
import { HttpModule } from '@angular/http';

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
    CheckoutModule,
    HttpModule,
    AdminModule,
    VendedorModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
