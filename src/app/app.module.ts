import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './home/main/sidebar/sidebar.component';
import { MethodComponent } from './home/main/method/method.component';
import { MethodListComponent } from './home/main/method/method-list/method-list.component';
import { MethodDetailComponent } from './home/main/method/method-detail/method-detail.component';
import { MainComponent } from './home/main/main.component';
import { MethodStartComponent } from './home/main/method/method-detail/method-start.component';
import { MethodItemComponent } from './home/main/method/method-list/method-item.component';
import { AdminCenterComponent } from './home/admin-center/admin-center.component';
import { AccountDetailsComponent } from './home/account/account.component';
import { MethodDetailSocialformPipe } from './home/main/method/method-detail/method-detail-pipes/method-detail-socialform.pipe';
import { MethodDetailPhasePipe } from './home/main/method/method-detail/method-detail-pipes/method-detail-phase.pipe';
import { MethodDetailSubphasePipe } from './home/main/method/method-detail/method-detail-pipes/method-detail-subphase.pipe';
import { MethodDetailCourseTypePipe } from './home/main/method/method-detail/method-detail-pipes/method-detail-coursetype.pipe';
import { RatingModule, CarouselModule, CollapseModule, AccordionModule, AlertModule } from "ngx-bootstrap";
import { TokenStorageService } from "./services/auth/token-storage.service";
import { SearchService } from './services/search/search.service';
import { ExportService } from './services/export/export.service';
import { HttpService } from './services/http/http.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from "./services/auth/auth.guard";
import { routing } from './app.routing';
import { MethodDetailCommentsComponent } from './home/main/method/method-detail/method-detail-comments/method-detail-comments.component';
import { MethodAddEditComponent } from './home/main/method/method-add-edit/method-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    MethodComponent,
    MethodListComponent,
    MethodDetailComponent,
    MainComponent,
    MethodStartComponent,
    MethodItemComponent,
    AdminCenterComponent,
    AccountDetailsComponent,
    MethodDetailSocialformPipe,
    MethodDetailPhasePipe,
    MethodDetailSubphasePipe,
    MethodDetailCourseTypePipe,
    MethodDetailCommentsComponent,
    MethodAddEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthService,
    ExportService,
    HttpService,
    SearchService,
    AuthGuard,
    TokenStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
