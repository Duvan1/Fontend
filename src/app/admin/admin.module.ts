import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes as routes } from './admin.routes';
import { AuthGuard } from './../core/service/auth.guard';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ChartsModule } from 'ng2-charts';
import { TableProductsComponent } from './admin-products/table-products/table-products.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { UpdatesProductsComponent } from './admin-products/updates-products/updates-products.component';
import { StatsProductsComponent } from './admin-products/stats-products/stats-products.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TablePedidosComponent } from './pedidos/table-pedidos/table-pedidos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { TableEmpleadosComponent } from './empleados/table-empleados/table-empleados.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TableCategoriasComponent } from './categorias/table-categorias/table-categorias.component';
import { StatsCategoriasComponent } from './categorias/stats-categorias/stats-categorias.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [AdminComponent, NavbarAdminComponent, DashboardComponent, GraficosComponent, TableProductsComponent, AdminProductsComponent, UpdatesProductsComponent, StatsProductsComponent, PedidosComponent, TablePedidosComponent, EmpleadosComponent, TableEmpleadosComponent, CategoriasComponent, TableCategoriasComponent, StatsCategoriasComponent, StatsComponent],
  providers: [AuthGuard]
})
export class AdminModule { }
