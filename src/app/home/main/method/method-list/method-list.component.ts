import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Method} from '../method.model';
import {MethodService} from '../method.service';
import {Observable, Subscription} from 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.scss']
})
export class MethodListComponent implements OnInit, OnDestroy {

  methods: Method[] = [];
  searchQuery = '';
  methodListSubscription: Subscription;
  favoritesSubscription: Subscription;
  favorites: string[] = [];
  initialLoad = true;

  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(private methodService: MethodService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscribeToMethodListChanges();
    this.subscribeToFavoriteChanges();
    this.methodService.getFavoritesIds();
    this.refreshView();
    Observable.fromEvent(
      this.searchBar.nativeElement, 'keyup')
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(
        () => this.refreshView()
      );
  }

  private subscribeToFavoriteChanges() {
    this.favoritesSubscription = this.methodService.favoritesChanged.subscribe(
      (favorites: string[]) => {
        this.favorites = favorites;
      });
  }

  private subscribeToMethodListChanges() {
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
  }

  refreshView() {
    this.methodService.getAllMethodsByQuery(this.searchQuery);
  }

  ngOnDestroy() {
    this.methodListSubscription.unsubscribe();
    this.favoritesSubscription.unsubscribe();
    this.methodService.checkedMethods = [];
  }
}
