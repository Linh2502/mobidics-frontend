import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Animations } from "../animations";
import { User } from "../services/auth/user/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuCollapsed: boolean = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getNameOfUser() {
    let user: User = this.authService.loggedInUser;
    return user.firstname + " " + user.lastname;
  }

  onNavigationPressed() {
    this.isMenuCollapsed = true;
  }

  logout(): void {
    this.authService.logout();
  }
}
