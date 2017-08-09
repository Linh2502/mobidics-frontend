import {Component, OnDestroy, OnInit} from '@angular/core';
import {MethodService} from '../../home/main/method/method.service';
import {Subscription} from 'rxjs/Subscription';
import {CheckboxState} from '../checkbox/checkbox-state.model';

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
  }

  ngOnDestroy() {
  }

  onCourseTypeSelect(checkboxState: CheckboxState) {
    if (checkboxState.selectionState) {
      this.methodService.addCourseTypeSelection(checkboxState.value);
    } else {
      this.methodService.removeCourseTypeSelection(checkboxState.value);
    }
  }

  onSocialFormSelect(checkBoxState: CheckboxState) {
    if (checkBoxState.selectionState) {
      this.methodService.addSocialFormSelection(checkBoxState.value);
    } else {
      this.methodService.removeSocialFormSelection(checkBoxState.value);
    }
  }
}
