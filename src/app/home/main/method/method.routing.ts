import { Routes } from "@angular/router";
import { MethodDetailComponent } from "./method-detail/method-detail.component";
import { MethodStartComponent } from "./method-detail/method-start.component";
import { MethodAddEditComponent } from "./method-add-edit/method-add-edit.component";

export const METHOD_ROUTES: Routes = [
  { path: '', component: MethodStartComponent, pathMatch: 'full' },
  { path: 'new', component: MethodAddEditComponent },
  { path: ':id', component: MethodDetailComponent },
  { path: ':id/edit', component: MethodAddEditComponent }
];
