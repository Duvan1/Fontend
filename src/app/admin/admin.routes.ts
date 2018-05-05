import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { UpdatesProductsComponent } from './/admin-products/updates-products/updates-products.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { StatsComponent } from './stats/stats.component';

export const AdminRoutes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-products', component: AdminProductsComponent},
  { path: 'update-products', component: UpdatesProductsComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'empleados', component: EmpleadosComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'stats', component: StatsComponent}
];