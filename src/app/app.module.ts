import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRouting, appRoutingProviders } from "./app-routing";
import { AuthService } from "./services/auth/auth.service";
import { ExportService } from "./services/export/export.service";
import { HttpService } from "./services/http/http.service";
import { SearchService } from "./services/search/search.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
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
export class AppModule { }
