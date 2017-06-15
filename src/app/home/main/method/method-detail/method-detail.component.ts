import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Method} from '../method.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {MethodService} from '../method.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AuthService} from '../../../../services/auth/auth.service';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {Animations} from '../../../../animations';

@Component({
  selector: 'app-method-detail',
  templateUrl: './method-detail.component.html',
  styleUrls: ['./method-detail.component.scss'],
  animations: [
    Animations.fadeInOut
  ]
})
export class MethodDetailComponent implements OnInit, OnDestroy {
  @ViewChild('detailContainer') detailsContainer: PerfectScrollbarComponent;
  method: Method;
  subscription: Subscription;
  isFavorite = false;

  constructor(private methodService: MethodService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  onNavigateBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    this.methodService.notifyDetailPagedSelected(false);
  }

  onEditButtonClicked() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteButtonClicked() {
    console.log('DELETE');
    this.methodService.deleteMethod(this.method).subscribe(
      () => {
        this.methodService.refreshMethods();
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      },
      () => console.log('ERROR')
    );
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.method = null;
        this.methodService.getMethodById(params['id']).subscribe(
          method => {
            this.method = method;
            this.methodService.getFavoritesIds().subscribe(
              (favorites: string[]) => this.isFavorite = favorites.includes(this.method.id)
            );
            this.detailsContainer.scrollToTop(0);
            this.methodService.notifyDetailPagedSelected(true);
          },
          () => this.router.navigate(['../']));
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
