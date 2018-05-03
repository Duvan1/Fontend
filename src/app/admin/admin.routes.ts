import { AdminComponent } from './admin.component';

export const AdminRoutes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent }
];