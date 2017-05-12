import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Method } from '../method.model';
import { MethodService } from '../method.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit, OnDestroy {

  methods: Method[] = [];
  searchQuery: string = "";
  methodListSubscription: Subscription;
  initialLoad: boolean = true;

  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(private methodService: MethodService,
              private router: Router) {
  }

  ngOnInit() {
    this.methodListSubscription = this.methodService.methodListChanged.subscribe(
      (methods: Method[]) => {
        this.methods = methods;
        if (this.initialLoad) {
          this.initialLoad = false;
        } else {
          this.router.navigate(['/methods']);
          this.methodService.notifyDetailPagedSelected(false);
        }
      }
    );
    this.methodService.getAllMethodsByQuery("");
    Observable.fromEvent(
      this.searchBar.nativeElement, 'keyup')
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(
        () => this.methodService.getAllMethodsByQuery(this.searchQuery)
      );
  }

  ngOnDestroy() {
    this.methodListSubscription.unsubscribe();
    this.methodService.checkedMethods = [];
  }

  onSearchButtonClicked() {
    this.methodService.getAllMethodsByQuery(this.searchQuery);
  }
}
