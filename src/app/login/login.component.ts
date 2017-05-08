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
  loginModel: any = {
    "username": "",
    "password": "",
    "shouldPersist": false
  };
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(
      this.loginModel.username,
      this.loginModel.password,
      this.loginModel.shouldPersist)
      .subscribe(
        () => {
          if (this.authService.getLoggedinUser()) {
            this.router.navigate(['/methods']);
          }
        },
        (error) => {
          this.router.navigate(['/login']);
          this.handleError();
        });
  }

  private handleError() {
    this.errorMessage = 'Nutzername oder Passwort ist falsch!';
  }
}
