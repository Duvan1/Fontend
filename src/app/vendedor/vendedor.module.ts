import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorComponent } from './vendedor.component';
import { RouterModule } from '@angular/router';
import { VendedorRoutes as routes } from './vendedor.routes';

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forChild(routes)
  ],
  declarations: [VendedorComponent]
})
export class VendedorModule { }
