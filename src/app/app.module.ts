import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AppRouting, appRoutingProviders} from "./app-routing";
import {AuthService} from "./services/auth/auth.service";
import {ExportService} from "./services/export/export.service";
import {HttpService} from "./services/http/http.service";
import {SearchService} from "./services/search/search.service";
import {HeaderComponent} from './navbar/navbar.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import { SidemenuComponent } from './home/sidemenu/sidemenu.component';
import { MethodComponent } from './home/method/method.component';
import { MethodListComponent } from './home/method/method-list/method-list.component';
import { MethodDetailComponent } from './home/method/method-detail/method-detail.component';
import { MethodAddComponent } from './home/method/method-add/method-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SidemenuComponent,
    MethodComponent,
    MethodListComponent,
    MethodDetailComponent,
    MethodAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    CollapseModule.forRoot()
  ],
  providers: [
    AuthService,
    appRoutingProviders,
    ExportService,
    HttpService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
