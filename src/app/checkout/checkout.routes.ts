import { CartComponent } from './cart/cart.component';

export const CheckoutRoutes = [
  { path: '', redirectTo: '/shopping-cart', pathMatch: 'full' },
  { path: 'shopping-cart', component: CartComponent },
];