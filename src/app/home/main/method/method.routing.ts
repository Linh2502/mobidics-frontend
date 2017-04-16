import { Routes } from "@angular/router";
import { MethodDetailComponent } from "./method-detail/method-detail.component";
import { MethodEditComponent } from "./method-edit/method-edit.component";
import { MethodAddComponent } from "./method-add/method-add.component";
import { MethodStartComponent } from "./method-detail/method-start.component";

export const METHOD_ROUTES: Routes = [
  { path: '', component: MethodStartComponent, pathMatch: 'full' },
  { path: 'new', component: MethodAddComponent },
  { path: ':id', component: MethodDetailComponent },
  { path: ':id/edit', component: MethodEditComponent }
];
