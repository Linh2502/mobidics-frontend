import {Component, OnInit} from '@angular/core';
import {User} from '../../services/auth/user/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Animations} from '../../animations';

@Component({
  selector: 'app-account',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  animations: [Animations.fadeInOut]
})
export class AccountDetailsComponent implements OnInit {
  user: User;
  profileImage = 'assets/avatar_male.png';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.loggedInUser;
  }

  onEditButtonClicked(): void {
    // TODO: route to edit
  }
}
