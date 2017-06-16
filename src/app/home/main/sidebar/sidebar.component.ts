import {Component, OnDestroy, OnInit} from '@angular/core';
import {MethodService} from '../method/method.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  methodServiceSubscription: Subscription;

  constructor(private methodService: MethodService) {
  }

  onFavoriteButtonClicked() {
    this.methodService.getFavorites();
  }

  ngOnInit() {
    this.methodServiceSubscription = this.methodService.methodListChanged.subscribe(
      () => console.log('TODO')
    );
  }

  ngOnDestroy() {
    this.methodServiceSubscription.unsubscribe();
  }
}
