import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../services/auth/user.model";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getLoggedinUser();
  }

}
