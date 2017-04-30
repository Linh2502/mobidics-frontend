import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { Observable } from "rxjs";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userLogin: any = { username: 'admin', password: 'admin' };
  private errorMessage: string = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  protected login() {
    this.authService.login(this.userLogin.username, this.userLogin.password).subscribe(
      () => {
        if (this.authService.isLoggedIn) {
          this.router.navigate(['/methods']);
        } else {
          this.handleError(null);
        }
      }, (err) => {
        this.router.navigate(['/login']);
        this.handleError(err);
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
