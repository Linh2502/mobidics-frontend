import { Component, OnInit } from '@angular/core';
import { Method } from "../method.model";

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit {

  methods: Method[] = [
    new Method(1, '4-Ecken-Methode', 'Eine Methode', 'http://treeday.planetark.org/images/coords/public/image-760-testimage.jpg',3),
    new Method(2, 'Hallo Welt', 'Die Hallo Methode', 'http://treeday.planetark.org/images/coords/public/image-760-testimage.jpg',5)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
