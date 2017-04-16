import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./home/account/account.component";
import { AuthGuardService } from "./services/auth/auth-guard.service";
import { MainComponent } from "./home/main/main.component";
import { METHOD_ROUTES } from "./home/main/method/method.routing";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'methods', component: MainComponent, children: METHOD_ROUTES },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
