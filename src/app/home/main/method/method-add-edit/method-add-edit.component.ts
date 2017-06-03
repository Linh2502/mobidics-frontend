import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Method } from '../method.model';
import { MethodService } from "../method.service";

@Component({
  selector: 'method-add-edit',
  templateUrl: './method-add-edit.component.html',
  styleUrls: ['./method-add-edit.component.scss']
})
export class MethodAddEditComponent implements OnInit, OnDestroy {
  private methodId: number;
  private routerSubscription: Subscription;
  private isNew = true;
  private method: Method;
  private uploadedImages: string[] = [];

  methodForm: FormGroup;

  private socialFormOptions: any[] = [
    { name: 'Plenum interaktiv', value: '0', checked: false },
    { name: 'Partner/Gruppenarbeit', value: '1', checked: false },
    { name: 'Plenum untereinander', value: '2', checked: false },
    { name: 'Einzelarbeit', value: '3', checked: false },
    { name: 'Plenum frontal', value: '4', checked: false }
  ];

  constructor(private methodService: MethodService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  onSubmit() {
    const newMethod = this.methodForm.value;
    if (this.isNew) {
      this.methodService.addMethod(newMethod);
    } else {
      this.methodService.editMethod(newMethod);
    }

    this.onNavigateBack();
  }

  onCancel() {
    this.onNavigateBack();
  }

  onNavigateBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  onAddIngredientControl(name: string, amount: string) {
    (<FormArray>this.methodForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, Validators.required)
      })
    );
  }

  onRemoveIngredientControl(index: number) {
    (<FormArray> this.methodForm.get('ingredients')).removeAt(index);
  }

  ngOnInit() {
    this.methodForm = new FormGroup({
      'ingredients': new FormArray([]),
      'title': new FormControl(''),
      'alternativeTitles': new FormControl(''),
      'socialForm': new FormControl(''),
      'phase': new FormControl(''),
      'subPhase': new FormControl(''),
      'result': new FormControl(''),
      'courseType': new FormControl(''),
      'groupType': new FormControl(''),
      'groupSizeMin': new FormControl(''),
      'groupSizeMax': new FormControl(''),
      'groupSizeComment': new FormControl(''),
      'proceeding': new FormControl(''),
      'phaseProceeding': new FormControl(''),
      'seating': new FormControl(''),
      'material': new FormControl(''),
      'methodMaterial': new FormControl(''),
      'timeMax': new FormControl(''),
      'timeMin': new FormControl(''),
      'timeComment': new FormControl(''),
      'variations': new FormControl(''),
      'examples': new FormControl(''),
      'tips': new FormControl(''),
      'experiences': new FormControl(''),
      'creationDate': new FormControl(''),
      'lastModifiedDate': new FormControl(''),
      'rating': new FormControl(''),
      'citations': new FormControl(''),
      'userRating': new FormControl(''),
      'visualization': new FormControl(''),
      'weblinks': new FormControl(''),
      'scope': new FormControl(''),
    });
    this.routerSubscription = this.activatedRoute.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.methodId = params['id'];
          this.methodService.getMethodById(this.methodId).subscribe(
            (method: Method) => {
              this.methodForm.get('ingredients').setValue([]);
              this.methodForm.get('title').setValue(method.title);
              this.methodForm.get('alternativeTitles').setValue(method.alternativeTitles);
              this.methodForm.get('socialForm').setValue(method.socialForm);
              this.methodForm.get('phase').setValue(method.phase);
              this.methodForm.get('subPhase').setValue(method.subPhase);
              this.methodForm.get('result').setValue(method.result);
              this.methodForm.get('courseType').setValue(method.courseType);
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
              this.methodForm.get('creationDate').setValue(method.creationDate);
              this.methodForm.get('lastModifiedDate').setValue(method.lastModifiedDate);
              this.methodForm.get('rating').setValue(method.rating);
              this.methodForm.get('citations').setValue(method.citations);
              this.methodForm.get('visualization').setValue(method.visualization);
              this.methodForm.get('weblinks').setValue(method.weblinks);
              this.methodForm.get('scope').setValue(method.scope);
            }
          );
        } else {
          this.isNew = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.uploadedImages.push(event.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }
}
