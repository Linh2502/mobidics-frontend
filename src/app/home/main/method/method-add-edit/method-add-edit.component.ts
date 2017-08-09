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

@Component({
  selector: 'app-method-add-edit',
  templateUrl: './method-add-edit.component.html',
  styleUrls: ['./method-add-edit.component.scss'],
  animations: [
    Animations.pushInOut,
    Animations.fadeInOut]
})
export class MethodAddEditComponent implements OnInit, OnDestroy {

  @ViewChild('thumbnailUploadButton') thumbnailUploadButton: ElementRef;
  @ViewChild('imageUploadButton') imageUploadButton: ElementRef;
  imagePreviewScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: false
  };
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 96,
    resizeMaxWidth: 96
  };
  allowedImageExtensions = ['jpg', 'png', 'gif', 'jpeg'];

  methodId: number;
  routerSubscription: Subscription;
  isNew = true;
  method: Method;
  uploadedImages: string[] = [];
  thumbnailSrc;

  thumbnailErrorMessage: string;
  imageUploadErrorMessage: string;

  methodForm: FormGroup;

  socialFormOptions: any[] = [
    {name: 'Plenum interaktiv', value: '0', checked: false},
    {name: 'Partner/Gruppenarbeit', value: '1', checked: false},
    {name: 'Plenum untereinander', value: '2', checked: false},
    {name: 'Einzelarbeit', value: '3', checked: false},
    {name: 'Plenum frontal', value: '4', checked: false}
  ];

  phaseOptions: any[] = [
    {name: '(Lern-)Atmosphäre fördern', value: '0', checked: false},
    {name: 'Ausrichten', value: '1', checked: false},
    {name: 'Vorwissen aktivieren', value: '2', checked: false},
    {name: 'Informieren', value: '3', checked: false},
    {name: 'Verarbeiten', value: '4', checked: false},
    {name: 'Auswerten', value: '5', checked: false}
  ];

  subphaseOptions: any[][] = [
    [
      {name: 'Kennenlernen', value: '11', checked: false},
      {name: 'Persönlicher Austausch (Erfahrung)', value: '12', checked: false},
      {name: 'Gruppengefühl stärken', value: '13', checked: false},
      {name: 'Auflockerung', value: '6', checked: false},
      {name: 'Ausklang', value: '14', checked: false}
    ],
    [
      {name: 'Auf Thema einstimmen / Sensibilisieren', value: '0', checked: false},
    ],
    [
      {name: 'Vorwissen erfragen', value: '1', checked: false},
      {name: 'Inhalte wiederholen', value: '2', checked: false}],
    [
      {name: 'Wissensinput', value: '3', checked: false},
      {name: 'Wissen generieren', value: '4', checked: false}
    ],
    [
      {name: 'Kritische Auseinandersetzung mit Wissen', value: '5', checked: false},
      {name: 'Wissen anwenden / umsetzen', value: '7', checked: false},
      {name: 'Wissen festigen', value: '8', checked: false},
      {name: 'Auflockerung', value: '19', checked: false},
    ],
    [
      {name: 'Wissen abfragen', value: '9', checked: false},
      {name: 'Lernprozess reflektieren', value: '10', checked: false},
      {name: 'Feedback einholen', value: '18', checked: false}
    ]
  ];

  courseTypeOptions: any[] = [
    {name: 'Seminar', value: '0', checked: false},
    {name: 'Übung', value: '1', checked: false},
    {name: 'Vorlesung', value: '2', checked: false}
  ];

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
              this.precheckSocialForms(this.dataConverter.singleColonDataToArray(method.socialForm));
              this.precheckPhases(this.dataConverter.singleColonDataToArray(method.phase));
              this.precheckSubphases(this.dataConverter.singleColonDataToArray(method.subPhase));
              this.precheckCourseTypes(this.dataConverter.singleColonDataToArray(method.courseType));
            }
          );
        } else {
          this.isNew = true;
        }
      }
    );
  }

  precheckSocialForms(values: number[]): void {
    this.socialFormOptions.forEach(
      socialForm => {
        socialForm.checked = values.includes(+socialForm.value);
      });
  }

  precheckPhases(values: number[]): void {
    this.phaseOptions.forEach(
      phase => {
        phase.checked = values.includes(+phase.value);
      });
  }

  precheckSubphases(values: number[]): void {
    this.subphaseOptions.forEach(
      phaseSubphases => phaseSubphases.forEach(
        subphase =>
          subphase.checked = values.includes(+subphase.value)
      )
    );
  }

  precheckCourseTypes(values: number[]): void {
    this.courseTypeOptions.forEach(
      courseType => courseType.checked = values.includes(+courseType.value)
    );
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
    this.onNavigateBack();
  }

  onCancel() {
    this.onNavigateBack();
  }

  onNavigateBack() {
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

  onPhaseOptionsChanged(index) {
    if (this.phaseOptions[index].checked) {
      this.subphaseOptions[index].forEach(
        subphase => subphase.checked = false
      );
    }
  }

  onCloseThumbnailErrorMessage() {
    this.thumbnailErrorMessage = null;
  }

  onCloseImageUploadErrorMessage() {
    this.imageUploadErrorMessage = null;
  }
}
