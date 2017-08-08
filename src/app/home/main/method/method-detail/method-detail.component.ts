import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Method} from '../../../../models/method.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {MethodService} from '../method.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AuthService} from '../../../../services/auth/auth.service';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {Animations} from '../../../../animations';
import {Rating} from '../../../../models/rating.model';

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
  selectedRating: number;

  constructor(public authService: AuthService,
              private methodService: MethodService,
              private activatedRoute: ActivatedRoute,
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
    this.methodService.deleteMethod(this.method).subscribe(
      () => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      },
      () => console.log('ERROR')
    );
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        const selectedMethodId = params['id'];
        this.fetchMethod(selectedMethodId);
      }
    );
  }

  fetchMethod(methodId: string) {
    this.method = null;
    this.methodService.getMethodById(methodId).subscribe(
      method => {
        this.method = method;
        this.isFavorite = this.methodService.cachedFavorites.includes(this.method.id);
        this.detailsContainer.scrollToTop(0);
        this.methodService.notifyDetailPagedSelected(true);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['../']);
      });
    this.methodService.getUserrating(methodId).subscribe(
      (rating: Rating) =>
        this.selectedRating = rating.rating ? rating.rating : null
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.methodService.deleteFavorite(this.method.id);
    } else {
      this.methodService.addFavorite(this.method.id);
    }
    this.isFavorite = !this.isFavorite;
  }

  updateUserrating() {
    this.methodService.updateUserrating(this.method.id, this.selectedRating).subscribe(
      () => this.fetchMethod(this.method.id)
    );
  }
}
