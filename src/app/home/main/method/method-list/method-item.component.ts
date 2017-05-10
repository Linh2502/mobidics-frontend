import { Component, Input, OnInit } from '@angular/core';
import { Method } from "../method.model";
import { AuthService } from "../../../../services/auth/auth.service";
import { User } from "../../../../services/auth/user/user.model";
import { MethodService } from "../method.service";

@Component({
  selector: 'app-method-item',
  templateUrl: './method-item.component.html',
  styleUrls: ['./method-item.component.css']
})
export class MethodItemComponent implements OnInit {

  @Input("method") method: Method;
  isFavorite: boolean = false;
  max = 5;
  image = "https://app.crownmakers.com/media/2013/12/19/47d5b24fb5fce429a64804ca1b782581-test.jpg";

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.methodService.getFavoritesIds().subscribe(
      (favorites: string[]) => this.isFavorite = favorites.includes(this.method.id)
    )
  }
}
