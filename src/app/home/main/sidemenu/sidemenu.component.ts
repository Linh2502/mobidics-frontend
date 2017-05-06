import { Component, OnInit } from '@angular/core';
import { MethodService } from "../method/method.service";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {


  constructor(private methodService: MethodService) { }

  ngOnInit() {
    this.methodService.detailPagedChanged.subscribe(
      () => console.log("HAPPENS")
    )
  }
}
