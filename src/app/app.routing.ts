import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { METHOD_ROUTES } from './home/main/method/method.routing';
import { LoginComponent } from './login/login.component';
import { AdminCenterComponent } from './home/admin-center/admin-center.component';
import { AccountDetailsComponent } from "./home/account/account.component";
import { AuthGuard } from "./services/auth/auth.guard";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountDetailsComponent, canActivate: [AuthGuard] },
  { path: 'methods', component: MainComponent, canActivate: [AuthGuard], children: METHOD_ROUTES },
  { path: 'admin-center', component: AdminCenterComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/methods' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
