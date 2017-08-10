import {Component, OnDestroy, OnInit} from '@angular/core';
import {MethodService} from '../../home/main/method/method.service';
import {CheckboxState} from '../checkbox/checkbox-state.model';
import {courseTypes, phases, socialForms, subPhases} from '../../models/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
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
  }

  ngOnDestroy() {
  }

  onCourseTypeSelect(checkboxState: CheckboxState) {
    this.methodService.updateCourseTypeSelection(checkboxState);
  }

  onSocialFormSelect(checkBoxState: CheckboxState) {
    this.methodService.updateSocialFormSelection(checkBoxState);
  }

  onPhaseSelect(checkBoxState: CheckboxState) {
    this.methodService.updatePhaseSelection(checkBoxState);
  }

  onSubphaseSelect(checkBoxState: CheckboxState) {
    this.methodService.updateSubphaseSelection(checkBoxState);
  }
}
