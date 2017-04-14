/**
 * Created by Linh on 14/04/2017.
 */
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuardService } from "./services/auth/auth-guard.service";

const appRoutes: Routes = [
  { component: LoginComponent, path: 'login' },
  { canActivate: [ AuthGuardService ], component: HomeComponent, path: 'home' }
];

export const appRoutingProviders: any[] = [];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
