import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    'username': '',
    'password': '',
    'shouldPersist': false
  };
  loading = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    console.log('login');
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

  onRegisterButtonClicked() {
    this.router.navigate(['/register']);
  }
}
