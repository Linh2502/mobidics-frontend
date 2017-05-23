import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Animations } from "../animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [Animations.slideInOut]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuCollapsed: boolean = true;
  userIsLoggedIn: boolean = false;
  loginStatusSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.userIsLoggedIn = !!localStorage.getItem('authCache');
  }

  ngOnInit() {
    this.loginStatusSubscription = this.authService.loggedInStatusChanged.subscribe(
      (changedLoginStatus: boolean) => this.userIsLoggedIn = changedLoginStatus
    )
  }

  ngOnDestroy() {
    this.loginStatusSubscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
