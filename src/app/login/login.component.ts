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
  loginForm: any = {
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
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(
      this.loginForm.username,
      this.loginForm.password,
      this.loginForm.shouldPersist)
      .subscribe(
        () => {
          this.router.navigate(['/methods']);
        },
        (error) => {
          this.router.navigate(['/login']);
          this.handleError();
        });
  }

  private handleError() {
    this.loading = false;
    this.errorMessage = 'Nutzername oder Passwort ist falsch!';
  }
}
