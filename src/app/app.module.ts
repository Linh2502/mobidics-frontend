import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MethodComponent} from './home/main/method/method.component';
import {MethodListComponent} from './home/main/method/method-list/method-list.component';
import {MethodDetailComponent} from './home/main/method/method-detail/method-detail.component';
import {MainComponent} from './home/main/main.component';
import {MethodStartComponent} from './home/main/method/method-detail/method-start.component';
import {MethodListItemComponent} from './home/main/method/method-list/method-list-item.component';
import {AdminCenterComponent} from './components/admin-center/admin-center.component';
import {MethodSocialformPipe} from './home/main/method/method-pipes/method-socialform.pipe';
import {MethodPhasePipe} from './home/main/method/method-pipes/method-phase.pipe';
import {MethodSubphasePipe} from './home/main/method/method-pipes/method-subphase.pipe';
import {MethodCourseTypePipe} from './home/main/method/method-pipes/method-coursetype.pipe';
import {RatingModule, CarouselModule, CollapseModule, AlertModule, ModalModule} from 'ngx-bootstrap';
import {TokenStorageService} from './services/auth/token-storage.service';
import {ExportService} from './services/export/export.service';
import {HttpService} from './services/http/http.service';
import {AuthService} from './services/auth/auth.service';
import {AuthGuard} from './services/auth/auth.guard';
import {routing} from './app.routing';
import {MethodAddEditComponent} from './home/main/method/method-add-edit/method-add-edit.component';
import {SplitArrayPipe} from './pipes/split-array.pipe';
import {ArrayAsStringPipe} from './pipes/array-as-string.pipe';
import {StringAsArrayPipe} from './pipes/string-as-array.pipe';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ImageUploadModule} from 'ng2-imageupload';
import {DataConverterService} from './services/data-converter/data-converter.service';
import {MethodScopePipe} from './home/main/method/method-pipes/method-scope.pipe';
import {AccountDetailsComponent} from './home/account/account-details/account-details.component';
import {AccountCreateComponent} from './home/account/account-create/account-create.component';
import {AccountEditComponent} from './home/account/account-edit/account-edit.component';
import {AccountFormComponent} from './home/account/account-form/account-form.component';
import {LabelValueComponent} from './components/label-value/label-value.component';
import {AccountGenderPipe} from './home/account/account-pipes/account-gender.pipe';
import {AccountLanguagePipe} from './home/account/account-pipes/account-language.pipe';
import {TimeSincePipe} from './pipes/time-since.pipe';
import {AccountComponent} from './home/account/account.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentListComponent} from './components/comments/comment-list/comment-list.component';
import {CommentFormComponent} from './components/comments/comment-form/comment-form.component';
import {CommentListItemComponent} from './components/comments/comment-list/comment-list-item/comment-list-item.component';
import {DdmmyyyyDatePipe} from './pipes/ddmmyyyy-date.pipe';
import {CollapsiblePanelComponent} from './components/collapsible-panel/collapsible-panel.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {CheckboxOptionsComponent} from './components/checkbox/checkbox-options/checkbox-options.component';
import { RangeInputComponent } from './components/range-input/range-input.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    MethodListItemComponent,
    AdminCenterComponent,
    AccountDetailsComponent,
    MethodSocialformPipe,
    MethodPhasePipe,
    MethodSubphasePipe,
    MethodCourseTypePipe,
    SplitArrayPipe,
    MethodAddEditComponent,
    ArrayAsStringPipe,
    StringAsArrayPipe,
    MethodScopePipe,
    AccountCreateComponent,
    AccountEditComponent,
    AccountFormComponent,
    LabelValueComponent,
    AccountGenderPipe,
    AccountLanguagePipe,
    TimeSincePipe,
    AccountComponent,
    CommentsComponent,
    CommentListComponent,
    CommentFormComponent,
    CommentListItemComponent,
    DdmmyyyyDatePipe,
    CollapsiblePanelComponent,
    CheckboxComponent,
    CheckboxOptionsComponent,
    RangeInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    ImageUploadModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [
    AuthService,
    ExportService,
    HttpService,
    AuthGuard,
    TokenStorageService,
    DataConverterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
