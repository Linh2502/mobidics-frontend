import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userLogin: any = { userId: '', password: '' };
  private errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  protected login() {
    //TODO: get live url of login
    this.authService.login(this.userLogin.user, this.userLogin.password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate([ '/methods' ]);
      }
    }, (err) => {
      this.router.navigate([ '/methods' ]);
      //this.handleError(err);
    });
  }
  
  protected logout() {
    this.authService.logout();
  }
  
  private handleError(err) {
    this.errorMessage = 'Wrong username or password!';
    return Observable.throw(err);
  }
}
