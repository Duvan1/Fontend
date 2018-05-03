import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ProductGummyService } from './core/service/product-gummy.service';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AuthService } from'./core/service/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms'
import { AuthGuard } from './core/service/auth.guard';

//import { NotificationComponent } from './shared/components/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    //NotificationComponent
  ],
  imports: [
    routes,
    FormsModule,
    BrowserModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    ProductModule,
    CheckoutModule,
    HttpModule,
    AuthModule,
    AdminModule,
    VendedorModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AppComponent, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
