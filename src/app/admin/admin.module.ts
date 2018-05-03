import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes as routes } from './admin.routes';
import { AuthGuard } from './../core/service/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AdminComponent],
  providers: [AuthGuard]
})
export class AdminModule { }
