import {Routes} from '@angular/router';
import {AccountCreateComponent} from './account-create/account-create.component';
import {AccountEditComponent} from './account-edit/account-edit.component';
import {AccountDetailsComponent} from './account-details/account-details.component';

export const ACCOUNT_ROUTES: Routes = [
  {path: '', component: AccountDetailsComponent, pathMatch: 'full'},
  {path: 'edit', component: AccountEditComponent},
  {path: 'register', component: AccountCreateComponent}
];
