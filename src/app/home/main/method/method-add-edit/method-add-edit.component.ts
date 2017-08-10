import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Method} from '../../../../models/method.model';
import {MethodService} from '../method.service';
import {Animations} from '../../../../animations';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {ResizeOptions, ImageResult} from 'ng2-imageupload';
import {DataConverterService} from '../../../../services/data-converter/data-converter.service';
import {courseTypes, phases, socialForms, subPhases} from '../../../../models/constants';
import {CheckboxState} from '../../../../components/checkbox/checkbox-state.model';
import {mapSubphaseToPhaseIndex, updateSelectionArray} from '../../../../functions';

@Component({
  selector: 'app-method-add-edit',
  templateUrl: './method-add-edit.component.html',
  styleUrls: ['./method-add-edit.component.scss'],
  animations: [
    Animations.pushInOut,
    Animations.fadeInOut]
})
export class MethodAddEditComponent implements OnInit, OnDestroy {

  imagePreviewScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: false
  };
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 96,
    resizeMaxWidth: 96
  };
  allowedImageExtensions = ['jpg', 'png', 'gif', 'jpeg'];

  @ViewChild('thumbnailUploadButton') thumbnailUploadButton: ElementRef;
  @ViewChild('imageUploadButton') imageUploadButton: ElementRef;

  methodId: number;
  routerSubscription: Subscription;
  isNew = true;
  method: Method;
  uploadedImages: string[] = [];
  thumbnailSrc;

  thumbnailErrorMessage: string;
  imageUploadErrorMessage: string;

  methodForm: FormGroup;

  socialForms: any[] = socialForms;
  phases: any[] = phases;
  subphases: any[][] = subPhases;
  courseTypes: any[] = courseTypes;

  selectedSocialForms: string[] = [];
  selectedPhases: string[] = [];
  selectedSubphases: string[][] = [[], [], [], [], [], []];
  selectedCourseTypes: string[] = [];

  constructor(private methodService: MethodService,
              private router: Router, private dataConverter: DataConverterService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.methodForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'alternativeTitles': new FormControl(''),
      'result': new FormControl(''),
      'groupType': new FormControl(0, Validators.pattern('\\d+')),
      'groupSizeMin': new FormControl(0, Validators.pattern('\\d+')),
      'groupSizeMax': new FormControl(0, Validators.pattern('\\d+')),
      'groupSizeComment': new FormControl(''),
      'proceeding': new FormControl(''),
      'phaseProceeding': new FormControl(''),
      'seating': new FormControl(''),
      'material': new FormControl(''),
      'methodMaterial': new FormControl(''),
      'timeMax': new FormControl(0, Validators.pattern('\\d+')),
      'timeMin': new FormControl(0, Validators.pattern('\\d+')),
      'timeComment': new FormControl(''),
      'variations': new FormControl(''),
      'examples': new FormControl(''),
      'tips': new FormControl(''),
      'experiences': new FormControl(''),
      'rating': new FormControl(''),
      'citations': new FormControl(''),
      'visualization': new FormControl(''),
      'weblinks': new FormControl(''),
      'scope': new FormControl(0, Validators.pattern('\\d+')),
    });
    this.routerSubscription = this.activatedRoute.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.methodId = params['id'];
          this.methodService.getMethodById(this.methodId).subscribe(
            (method: Method) => {
              this.methodForm.get('title').setValue(method.title);
              this.methodForm.get('alternativeTitles').setValue(method.alternativeTitles);
              this.methodForm.get('result').setValue(method.result);
              this.methodForm.get('groupType').setValue(method.groupType);
              this.methodForm.get('groupSizeMin').setValue(method.groupSizeMin);
              this.methodForm.get('groupSizeMax').setValue(method.groupSizeMax);
              this.methodForm.get('groupSizeComment').setValue(method.groupSizeComment);
              this.methodForm.get('proceeding').setValue(method.proceeding);
              this.methodForm.get('phaseProceeding').setValue(method.phaseProceeding);
              this.methodForm.get('seating').setValue(method.seating);
              this.methodForm.get('material').setValue(method.material);
              this.methodForm.get('methodMaterial').setValue(method.methodMaterial);
              this.methodForm.get('timeMax').setValue(method.timeMax);
              this.methodForm.get('timeMin').setValue(method.timeMin);
              this.methodForm.get('timeComment').setValue(method.timeComment);
              this.methodForm.get('variations').setValue(method.variations);
              this.methodForm.get('examples').setValue(method.examples);
              this.methodForm.get('tips').setValue(method.tips);
              this.methodForm.get('experiences').setValue(method.experiences);
              this.methodForm.get('rating').setValue(method.rating);
              this.methodForm.get('citations').setValue(method.citations);
              this.methodForm.get('visualization').setValue(method.visualization);
              this.methodForm.get('weblinks').setValue(method.weblinks);
              this.methodForm.get('scope').setValue(method.scope);
              this.uploadedImages = method.images;
              this.thumbnailSrc = method.thumbnail;
              this.selectedSocialForms = this.dataConverter.singleColonDataToArray(method.socialForm);
              this.selectedPhases = this.dataConverter.singleColonDataToArray(method.phase);
              this.preselectSubphases(this.dataConverter.singleColonDataToArray(method.subPhase));
              this.selectedCourseTypes = this.dataConverter.singleColonDataToArray(method.courseType);
            }
          );
        } else {
          this.isNew = true;
        }
      }
    );
  }

  preselectSubphases(subphases: string[]) {
    subphases.forEach(subphase => {
      this.selectedSubphases[mapSubphaseToPhaseIndex(subphase)].push(subphase);
    });
  }

  onSocialFormSelect(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedSocialForms, checkBoxState);
  }

  onPhaseSelect(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedPhases, checkBoxState);
    if (!checkBoxState.selectionState) {
      this.selectedSubphases[+checkBoxState.value] = [];
    }
  }

  onSubphaseSelect(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedSubphases[mapSubphaseToPhaseIndex(checkBoxState.value)], checkBoxState);
  }

  onCourseTypeSelect(checkBoxState: CheckboxState) {
    updateSelectionArray(this.selectedCourseTypes, checkBoxState);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  onSubmit() {
    const newMethod: Method = this.methodForm.value;
    // TODO make language dynamic
    newMethod.language = 'de';
    newMethod.thumbnail = this.thumbnailSrc;
    newMethod.images = this.uploadedImages;

    // TODO include checkbox values
    if (this.isNew) {
      this.methodService.addMethod(newMethod).subscribe();
    } else {
      this.methodService.editMethod(newMethod).subscribe();
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    if (this.isNew) {
      this.methodService.notifyDetailPagedSelected(false);
    }
  }

  onImageSelected(imageResult: ImageResult) {
    if (imageResult.error) {
      this.imageUploadErrorMessage = 'Ungültige Datei!';
    } else {
      this.imageUploadErrorMessage = null;
      this.uploadedImages.push(imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL);
    }
    this.imageUploadButton.nativeElement.value = '';
  }

  onThumbnailSelected(imageResult: ImageResult) {
    if (imageResult.error) {
      this.thumbnailErrorMessage = 'Ungültige Datei!';
    } else {
      this.thumbnailErrorMessage = null;
      this.thumbnailSrc = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
    }
    this.thumbnailUploadButton.nativeElement.value = '';
  }

  onRemoveThumbnail() {
    this.thumbnailSrc = null;
  }

  onRemoveImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }

  onCloseThumbnailErrorMessage() {
    this.thumbnailErrorMessage = null;
  }

  onCloseImageUploadErrorMessage() {
    this.imageUploadErrorMessage = null;
  }
}
