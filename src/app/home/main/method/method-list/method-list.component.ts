import { Component, OnInit } from '@angular/core';
import { Method } from "../method.model";
import { MethodService } from "../method.service";

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit {

  methods: Method[] = [];

  constructor(private methodService: MethodService) {
  }

  ngOnInit() {
    this.methodService.getAllMethods().subscribe(
      (methods: Method[]) => this.methods = methods
    );
  }

}
