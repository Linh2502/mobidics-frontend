import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth/auth.service';
import { ExportService } from './services/export/export.service';
import { HttpService } from './services/http/http.service';
import { SearchService } from './services/search/search.service';
import { HeaderComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SidemenuComponent } from './home/main/sidemenu/sidemenu.component';
import { MethodComponent } from './home/main/method/method.component';
import { MethodListComponent } from './home/main/method/method-list/method-list.component';
import { MethodDetailComponent } from './home/main/method/method-detail/method-detail.component';
import { MethodAddComponent } from './home/main/method/method-add/method-add.component';
import { routing } from './app.routing';
import { MainComponent } from './home/main/main.component';
import { AccountComponent } from './home/account/account.component';
import { MethodEditComponent } from './home/main/method/method-edit/method-edit.component';
import { MethodStartComponent } from './home/main/method/method-detail/method-start.component';
import { MethodItemComponent } from './home/main/method/method-list/method-item.component';
import { AdminCenterComponent } from './home/admin-center/admin-center.component';
import { AccountDetailsComponent } from './home/account/account-details/account-details.component';

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
    AccountComponent,
    MethodEditComponent,
    MethodStartComponent,
    MethodItemComponent,
    AdminCenterComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
