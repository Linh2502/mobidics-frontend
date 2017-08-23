import {Component, OnInit} from '@angular/core';
import {Animations} from '../../../animations';
import {HttpService} from '../../../services/http/http.service';
import {User} from '../../../models/user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  animations: [Animations.fadeInOut]
})
export class AccountCreateComponent implements OnInit {

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.httpService.register(user).subscribe(
      () => console.log('Registration successful!'),
      () => console.log('Registration failed!'),
    );
  }

  onAbort() {
    this.router.navigate(['login']);
  }
}
