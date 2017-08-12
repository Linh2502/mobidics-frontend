import {Component, OnDestroy, OnInit} from '@angular/core';
import {MethodService} from '../../home/main/method/method.service';
import {CheckboxState} from '../checkbox/checkbox-state.model';
import {courseTypes, phases, socialForms, subPhases} from '../../models/constants';
import {MinMaxSummary} from '../../models/minMaxes.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  minMaxes: MinMaxSummary = new MinMaxSummary(0, 0, 0, 0);
  socialForms: any[] = socialForms;
  courseTypes: any[] = courseTypes;
  phases: any[] = phases;
  subphases: any[] = subPhases;

  constructor(private methodService: MethodService) {
  }

  onFavoriteButtonClicked() {
    this.methodService.getFavorites();
  }

  ngOnInit() {
    this.methodService.getMinMaxes().subscribe(
      (minMaxSummary: MinMaxSummary) =>
        this.minMaxes = minMaxSummary
    );
  }

  ngOnDestroy() {
  }

  onCourseTypeSelected(checkboxState: CheckboxState) {
    this.methodService.updateCourseTypeSelection(checkboxState);
  }

  onSocialFormSelected(checkBoxState: CheckboxState) {
    this.methodService.updateSocialFormSelection(checkBoxState);
  }

  onPhaseSelected(checkBoxState: CheckboxState) {
    this.methodService.updatePhaseSelection(checkBoxState);
  }

  onSubphaseSelected(checkBoxState: CheckboxState) {
    this.methodService.updateSubphaseSelection(checkBoxState);
  }

  onGroupTypeSelected(groupType: number) {
    this.methodService.updateGroupTypeSelection(groupType);
  }

  onMaxGroupSizeSelected(maxGroupsize: number) {
    this.methodService.updateMaxGroupSizeSelection(maxGroupsize);
  }

  onMaxTimeSelected(maxTime: number) {
    this.methodService.updateMaxTimeSelection(maxTime);
  }

  onMinRatingSelected(minRating: any) {
    this.methodService.updateMinRatingSelection(minRating);
  }
}
