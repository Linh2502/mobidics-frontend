import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {User} from '../../models/user/user.model';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css']
})
export class AdminCenterComponent implements OnInit {

  users: User[];
  selectedUser: User;
  selectedUserLevel: number;

  constructor(public authService: AuthService,
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.refreshView();
  }

  refreshView() {
    this.httpService.getAllUsers().subscribe(
      users => {
        this.users = users;
        this.selectedUser = users[0];
        this.selectedUserLevel = this.selectedUser.userLevel;
      }
    );
  }

  onDelete(user: User) {
    this.httpService.deleteUser(user).subscribe(
      () => this.refreshView()
    );
  }

  onDisapprove(user: User) {
    this.httpService.disapproveUser(user).subscribe(
      () => this.refreshView()
    );
  }

  onApprove(user: User) {
    this.httpService.approveUser(user).subscribe(
      () => this.refreshView()
    );
  }

  onUserlevelSelectionChanged(value) {
    this.selectedUserLevel = value;
  }

  onChangeButtonClicked() {
    this.httpService.changeRights(this.selectedUser.username, this.selectedUserLevel).subscribe(
      () => this.httpService.getAllUsers().subscribe(
        users => {
          this.users = users;
          this.selectedUser = users[0];
          this.selectedUserLevel = this.selectedUser.userLevel;
        }
      )
    );
  }
}
