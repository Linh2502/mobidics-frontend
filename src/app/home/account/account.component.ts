import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../services/auth/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../services/http/http.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private userForm: FormGroup;
  private user: User;
  private editModeOn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getLoggedinUser();

    this.userForm = new FormGroup({
      'firstname': new FormControl(this.user.firstname, Validators.required),
      'lastname': new FormControl(this.user.lastname, Validators.required),
      'username': new FormControl(this.user.username, Validators.required),
      'email': new FormControl(this.user.email,
        [Validators.required,
          Validators.email]),
      'languages': new FormControl(this.user.language, Validators.required),
      'gender': new FormControl(this.user.gender, Validators.required),
      'userStatus': new FormControl(this.user.userStatus, Validators.required),
      'userType': new FormControl(this.user.userType, Validators.required),
      'university': new FormControl(this.user.university, Validators.required),
      'faculty': new FormControl(this.user.faculty, Validators.required),
      'experience': new FormControl(this.user.experience,
        [Validators.required,
          Validators.pattern('\\d+'),
          Validators.maxLength(2)])
    });
  }

  onEditButtonClicked(): void {
    this.editModeOn = !this.editModeOn;
  }

  onSubmit() {
    this.editModeOn = !this.editModeOn;
  }

  onAbortEdit() {
    this.editModeOn = !this.editModeOn;
  }

  onUploadButtonClicked() {
  }
}
