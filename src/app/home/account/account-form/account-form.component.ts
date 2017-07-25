import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../services/auth/user/user.model';
import {AuthService} from '../../../services/auth/auth.service';
import {AccountGenderPipe} from '../account-pipes/account-gender.pipe';
import {AccountLanguagePipe} from '../account-pipes/account-language.pipe';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  userForm: FormGroup;
  userFormBackup: FormGroup;
  editModeOn = false;
  profileImage = 'assets/avatar_male.png';

  constructor(private authService: AuthService,
              private genderPipe: AccountGenderPipe,
              private languagePipe: AccountLanguagePipe) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'email': new FormControl('',
        [Validators.required,
          Validators.email]),
      'languages': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'userStatus': new FormControl('', Validators.required),
      'userType': new FormControl('', Validators.required),
      'university': new FormControl('', Validators.required),
      'faculty': new FormControl('', Validators.required),
      'experience': new FormControl('',
        [Validators.required,
          Validators.pattern('\\d+'),
          Validators.maxLength(2)])
    });
    const user: User = this.authService.loggedInUser;
    this.profileImage = user.profileImage ? user.profileImage : this.profileImage;
    this.userForm.get('firstname').setValue(user.firstname);
    this.userForm.get('lastname').setValue(user.lastname);
    this.userForm.get('username').setValue(user.username);
    this.userForm.get('email').setValue(user.email);
    this.userForm.get('languages').setValue(this.languagePipe.transform(user.language));
    this.userForm.get('gender').setValue(this.genderPipe.transform(user.gender));
    this.userForm.get('userStatus').setValue(user.userStatus);
    this.userForm.get('userType').setValue(user.userType);
    this.userForm.get('university').setValue(user.university.name);
    this.userForm.get('faculty').setValue(user.faculty.name);
    this.userForm.get('experience').setValue(user.experience);
  }

}
