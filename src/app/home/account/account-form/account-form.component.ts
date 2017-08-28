import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../../models/user/user.model';
import {AuthService} from '../../../services/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageResult, ResizeOptions} from 'ng2-imageupload';
import {userStatuses, userTypes, genders, languages} from '../../../models/constants';
import {University} from '../../../models/user/university.model';
import {Faculty} from '../../../models/user/faculty.model';
import {HttpService} from '../../../services/http/http.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  userStatuses = userStatuses;
  userTypes = userTypes;
  genders = genders;
  languages = languages;
  universities: University[];
  faculties: Faculty[];

  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 1024,
    resizeMaxWidth: 1024
  };
  allowedImageExtensions = ['jpg', 'png', 'gif', 'jpeg'];
  imageUploadErrorMessage = '';

  @ViewChild('imageUploadButton') imageUploadButton: ElementRef;
  @Input() newAccount = false;
  @Input() user: User = new User();
  @Output() aborted: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<User> = new EventEmitter();

  changePassword = false;
  passwordCheck = '';

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  ngOnInit() {
    this.httpService.getUniversities().subscribe(universities => this.universities = universities.sort((university1, university2) => {
        if (university1.name.toLowerCase() < university2.name.toLowerCase()) {
          return -1;
        }
        if (university1.name.toLowerCase() > university2.name.toLowerCase()) {
          return 1;
        }
        return 0;
      }
    ));
    this.httpService.getFaculties().subscribe(faculties => this.faculties = faculties.sort((faculty1, faculty2) => {
      if (faculty1.name.toLowerCase() < faculty2.name.toLowerCase()) {
        return -1;
      }
      if (faculty1.name.toLowerCase() > faculty2.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }));
  }

  onSubmit() {
    this.submitted.emit(this.user);
  }

  onAbortEdit() {
    this.aborted.emit();
  }

  onImageSelected(imageResult: ImageResult) {
    if (imageResult.error) {
      this.imageUploadErrorMessage = 'Ungültige Datei!';
    } else {
      this.imageUploadErrorMessage = null;
      this.user.profileImage = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
    }
    this.imageUploadButton.nativeElement.value = '';
  }

  onRemoveProfileImage() {
    this.user.profileImage = null;
  }
}
