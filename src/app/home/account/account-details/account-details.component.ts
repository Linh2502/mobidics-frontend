import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  user = {
    'firstname': 'Max',
    'lastname': 'Mustermann',
    'username': 'admin',
    'eMail': 'root@mobidics.org',
    'languages': [
      'Deutsch',
      'English'
    ],
    'gender': 'm',
    'userStatus': 'Prof.',
    'userType': 'Fest angestellt',
    'university': 'Technische Universität München',
    'faculty': 'Informatik',
    'experience': '20',
    'profileImage': 'http://www.castlehearing.co.uk/wp-content/uploads/2016/03/profile-placeholder.jpg'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
