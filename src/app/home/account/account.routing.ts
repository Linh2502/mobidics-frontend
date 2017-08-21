import {Routes} from '@angular/router';
import {AccountEditComponent} from './account-edit/account-edit.component';
import {AccountDetailsComponent} from './account-details/account-details.component';

export const ACCOUNT_ROUTES: Routes = [
  {path: 'me', component: AccountDetailsComponent, pathMatch: 'full'},
  {path: 'me/edit', component: AccountEditComponent, pathMatch: 'full'},
  {path: ':username', component: AccountDetailsComponent}
];
