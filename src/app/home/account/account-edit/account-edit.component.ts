import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user/user.model';
import {HttpService} from '../../../services/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.authService.loggedInUser;
  }

  onSubmit(user: User) {
    this.authService.refreshUser();
    console.log(user);
  }

  onAbort() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
