import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user/user.model';
import {HttpService} from '../../../services/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  constructor(private httpService: HttpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit(user: User) {
    console.log(user);
  }

  onAbort() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
