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
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.user = this.authService.loggedInUser;
  }

  onSubmit(user: User) {
    this.httpService.updateUser(this.user).subscribe(
      () => {
        this.authService.refreshUser();
        this.router.navigate(['account', 'me']);
      }
    );
  }

  onAbort() {
    this.router.navigate(['account', 'me']);
  }
}
