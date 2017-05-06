import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Method } from '../method.model';
import { MethodService } from '../method.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit {

  methods: Method[] = [];
  searchQuery: string = "";

  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(private methodService: MethodService,
              private router: Router) {
  }

  ngOnInit() {
    this.methodService.getAllMethodsByName(this.searchQuery).subscribe(
      (methods: Method[]) => this.methods = methods
    );
    Observable.fromEvent(
      this.searchBar.nativeElement, 'keyup')
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(
        () => this.methodService.getAllMethodsByName(this.searchQuery).subscribe(
          (methods: Method[]) => {
            this.methods = methods;
            this.router.navigate(['/methods']);
            this.methodService.onRouterParamsChanged(false);
          }
        ));
  }
}
