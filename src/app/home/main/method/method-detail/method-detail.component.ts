import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Method } from "../method.model";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MethodService } from "../method.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-method-detail',
  templateUrl: './method-detail.component.html',
  styleUrls: ['./method-detail.component.scss'],
  animations: [
    trigger('detailsLoaded', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500)
      ])
    ])
  ]
})
export class MethodDetailComponent implements OnInit, OnDestroy {
  @ViewChild('detailContainer') detailsContainer: ElementRef;
  method: Method;
  subscription: Subscription;
  isFavorite: boolean = false;

  constructor(private methodService: MethodService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  onNavigateBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    this.methodService.notifyDetailPagedSelected(false);
  }

  onEditButtonClicked() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.methodService.getMethodById(params['id']).subscribe(
          method => {
            this.method = method;
            this.methodService.getFavoritesIds().subscribe(
              (favorites: string[]) => this.isFavorite = favorites.includes(this.method.id)
            );
            this.detailsContainer.nativeElement.scrollTop = 0;
            this.methodService.notifyDetailPagedSelected(true);
          })
        ;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    // TODO make call to server
  }
}
