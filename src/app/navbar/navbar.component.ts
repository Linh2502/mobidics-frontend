import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }


}
