import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {User} from '../../models/user/user.model';

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css']
})
export class AdminCenterComponent implements OnInit {

  users: User[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getAllUsers().subscribe(
      users => this.users = users
    );
  }

}
