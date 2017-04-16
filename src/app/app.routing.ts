import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./home/account/account.component";
import { AuthGuardService } from "./services/auth/auth-guard.service";
import { MainComponent } from "./home/main/main.component";
import { METHOD_ROUTES } from "./home/main/method/method.routing";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/methods', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'methods', component: MainComponent, children: METHOD_ROUTES },
  { path: '**', redirectTo: '/methods' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
