import { Component, OnInit } from '@angular/core';
import { User } from '../../services/auth/user/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountDetailsComponent implements OnInit {

  userForm: FormGroup;
  userFormBackup: FormGroup;
  editModeOn = false;
  profileImage: string = "https://art.placefull.com/Content/Properties/shared/images/no-profile-image.png";

  private firstnameCtrl: FormControl = new FormControl("", Validators.required);
  private lastnameCtrl: FormControl = new FormControl("", Validators.required);
  private usernameCtrl: FormControl = new FormControl("", Validators.required);
  private emailCtrl: FormControl = new FormControl("",
    [Validators.required,
      Validators.email]);
  private languagesCtrl: FormControl = new FormControl("", Validators.required);
  private genderCtrl: FormControl = new FormControl("", Validators.required);
  private userStatusCtrl: FormControl = new FormControl("", Validators.required);
  private userTypeCtrl: FormControl = new FormControl("", Validators.required);
  private universityCtrl: FormControl = new FormControl("", Validators.required);
  private facultyCtrl: FormControl = new FormControl("", Validators.required);
  private experienceCtrl: FormControl = new FormControl("",
    [Validators.required,
      Validators.pattern('\\d+'),
      Validators.maxLength(2)]);


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstname': this.firstnameCtrl,
      'lastname': this.lastnameCtrl,
      'username': this.usernameCtrl,
      'email': this.emailCtrl,
      'languages': this.languagesCtrl,
      'gender': this.genderCtrl,
      'userStatus': this.userStatusCtrl,
      'userType': this.userTypeCtrl,
      'university': this.universityCtrl,
      'faculty': this.facultyCtrl,
      'experience': this.experienceCtrl
    });
    let user: User = this.authService.loggedInUser;
    this.profileImage = user.profileImage ? user.profileImage : this.profileImage;
    this.firstnameCtrl.setValue(user.firstname);
    this.lastnameCtrl.setValue(user.lastname);
    this.usernameCtrl.setValue(user.username);
    this.emailCtrl.setValue(user.email);
    this.languagesCtrl.setValue(AccountDetailsComponent.convertLanguages(user.language));
    this.genderCtrl.setValue(AccountDetailsComponent.convertGender(user.gender));
    this.userStatusCtrl.setValue(user.userStatus);
    this.userTypeCtrl.setValue(user.userType);
    this.universityCtrl.setValue(user.university.name);
    this.facultyCtrl.setValue(user.faculty.name);
    this.experienceCtrl.setValue(user.experience);
  }

  onEditButtonClicked(): void {
    this.editModeOn = !this.editModeOn;
    this.userFormBackup = this.userForm;
  }

  onSubmit() {
    console.log(this.userForm);
    this.editModeOn = !this.editModeOn;
  }

  onAbortEdit() {
    this.editModeOn = !this.editModeOn;
    this.userForm = this.userFormBackup;
  }

  onUploadButtonClicked() {
  }

  static
  convertGender(gender) {
    if (gender == 0) {
      return 'Männlich';
    } else {
      return 'Weiblich';
    }
  }

  static
  convertLanguages(languages) {
    let result: string;
    let languageArray: string[] = languages.split("::");
    result = this.mapLanguage(languageArray[0]);
    for (let i = 1; i < languageArray.length; i++) {
      result = result.concat(', ', this.mapLanguage(languageArray[i]));
    }
    return result;
  }

  static
  mapLanguage(language) {
    switch (language) {
      case 'de':
        return 'Deutsch';
      case 'en':
        return 'Englisch';
      case 'fr':
        return 'Französisch';
      case 'es':
        return 'Spanisch';
    }
  }
}
