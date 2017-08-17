import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './home/main/main.component';
import {METHOD_ROUTES} from './home/main/method/method.routing';
import {ACCOUNT_ROUTES} from './home/account/account.routing';
import {LoginComponent} from './components/login/login.component';
import {AdminCenterComponent} from './components/admin-center/admin-center.component';
import {AuthGuard} from './services/auth/auth.guard';
import {AdminGuard} from './services/auth/admin.guard';
import {AccountComponent} from './home/account/account.component';
import {AccountCreateComponent} from './home/account/account-create/account-create.component';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: AccountCreateComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard], children: ACCOUNT_ROUTES},
  {path: 'methods', component: MainComponent, canActivate: [AuthGuard], children: METHOD_ROUTES},
  {path: 'admin-center', component: AdminCenterComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: '**', redirectTo: '/methods'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
