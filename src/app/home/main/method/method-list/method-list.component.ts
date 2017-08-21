import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Method} from '../../../../models/method.model';
import {MethodService} from '../method.service';
import {Observable, Subscription} from 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';

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

  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(public methodService: MethodService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscribeToMethodListChanges();
    this.subscribeToFavoriteChanges();
    this.methodService.updateFavoriteIds();
    this.updateMethods();
    Observable.fromEvent(
      this.searchBar.nativeElement, 'keyup')
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(
        () => this.updateMethods()
      );
  }

  updateMethods() {
    this.methodService.setQuery(this.searchQuery);
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
      }
    );
  }

  ngOnDestroy() {
    this.methodListSubscription.unsubscribe();
    this.favoritesSubscription.unsubscribe();
    this.methodService.checkedMethods = [];
  }

  onNewMethodButtonClicked() {
    this.methodService.notifyDetailPagedSelected(true);
  }
}
