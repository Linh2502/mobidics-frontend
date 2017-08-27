import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {Animations} from '../../../animations';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-account',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  animations: [Animations.fadeInOut]
})
export class AccountDetailsComponent implements OnInit {
  panelTitle = 'Mein Konto';
  user: User;
  profileImage = 'assets/avatar_male.jpg';
  editButtonEnabled = true;

  constructor(private authService: AuthService,
              private httpService: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.hasOwnProperty('username')) {
          this.editButtonEnabled = false;
          this.httpService.getUserByUsername(params['username']).subscribe(
            (user: User) => {
              this.user = user;
              this.panelTitle = user.username + 's Konto';
            }
          );
        } else {
          this.user = this.authService.loggedInUser;
        }
      }
    );
  }

  onEditButtonClicked(): void {
    this.router.navigate(['account', 'me', 'edit']);
  }
}
