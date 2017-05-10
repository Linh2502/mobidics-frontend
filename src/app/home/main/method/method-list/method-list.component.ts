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
  userFavorites: string[] = [];
  methodListSubscription: Subscription;

  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(private methodService: MethodService,
              private router: Router) {
  }

  ngOnInit() {
    this.methodListSubscription = this.methodService.methodListChanged.subscribe(
      (methods: Method[]) => {
        this.methods = methods;
        this.router.navigate(['/methods']);
        this.methodService.notifyDetailPagedChanged(false);
      }
    );
    this.methodService.getAllMethodsByQuery("");
    this.methodService.getFavoritesIds().subscribe(
      (favorites: string[]) => this.userFavorites = favorites
    );
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
  }
}
