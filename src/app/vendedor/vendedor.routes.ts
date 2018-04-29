import { VendedorComponent } from './vendedor.component';

export const VendedorRoutes = [
  { path: '', redirectTo: '/vendedor', pathMatch: 'full' },
  { path: 'vendedor', component: VendedorComponent }
];