import { ProductComponent } from './product.component';

export const ProductRoutes = [
  //{ path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product/:id', component: ProductComponent }
];