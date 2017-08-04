import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/user/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getNameOfUser() {
    const user: User = this.authService.loggedInUser;
    return user.firstname + ' ' + user.lastname;
  }

  onNavigationPressed() {
    this.isMenuCollapsed = true;
  }

  logout(): void {
    this.authService.logout();
  }
}
