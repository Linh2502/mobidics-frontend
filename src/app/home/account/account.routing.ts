import { Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';

export const ACCOUNT_ROUTES: Routes = [
  { path: '', component: AccountDetailsComponent, pathMatch: 'full' },
];
