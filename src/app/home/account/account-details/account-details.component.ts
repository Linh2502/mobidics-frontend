import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {Animations} from '../../../animations';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  animations: [Animations.fadeInOut]
})
export class AccountDetailsComponent implements OnInit {
  user: User;
  profileImage = 'assets/avatar_male.png';

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.authService.loggedInUser;
  }

  onEditButtonClicked(): void {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }
}
