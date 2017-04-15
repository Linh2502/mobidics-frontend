import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from "./services/auth/auth.service";
import { ExportService } from "./services/export/export.service";
import { HttpService } from "./services/http/http.service";
import { SearchService } from "./services/search/search.service";
import { HeaderComponent } from './navbar/navbar.component';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { SidemenuComponent } from './home/main/sidemenu/sidemenu.component';
import { MethodComponent } from './home/main/method/method.component';
import { MethodListComponent } from './home/main/method/method-list/method-list.component';
import { MethodDetailComponent } from './home/main/method/method-detail/method-detail.component';
import { MethodAddComponent } from './home/main/method/method-add/method-add.component';
import { routing } from "./app.routing";
import { MainComponent } from './home/main/main.component';
import { AccountComponent } from './home/account/account.component';

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
    MethodAddComponent,
    MainComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    routing
  ],
  providers: [
    AuthService,
    ExportService,
    HttpService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
