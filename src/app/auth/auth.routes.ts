import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const AuthRoutes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];