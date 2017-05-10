import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../services/auth/user/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../../services/http/http.service";
import { University } from "../../services/auth/user/university.model";
import { Faculty } from "../../services/auth/user/faculty.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private userForm: FormGroup;
  private editModeOn = false;
  private profileImage: string = "https://art.placefull.com/Content/Properties/shared/images/no-profile-image.png";

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


  constructor(private httpService: HttpService) {
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
    this.httpService.getUserMe().subscribe(
      (user: User) => {
        this.profileImage = user.profileImage ? user.profileImage : this.profileImage;
        this.firstnameCtrl.setValue(user.firstname);
        this.lastnameCtrl.setValue(user.lastname);
        this.usernameCtrl.setValue(user.username);
        this.emailCtrl.setValue(user.email);
        this.languagesCtrl.setValue(user.language);
        this.genderCtrl.setValue(user.gender);
        this.userStatusCtrl.setValue(user.userStatus);
        this.userTypeCtrl.setValue(user.userType);
        this.universityCtrl.setValue(user.university.name);
        this.facultyCtrl.setValue(user.faculty.name);
        this.experienceCtrl.setValue(user.experience);
      }
    );
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
