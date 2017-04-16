import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed: boolean = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  
  logout(): void {
    this.authService.logout();
  }
}
