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
  methodForm: FormGroup;
  private methodId: number;
  private routerSubscription: Subscription;
  private isNew = true;
  private method: Method;
  private uploadedImages: string[] = [];

  constructor(private methodService: MethodService,
              private router: Router,
              private route: ActivatedRoute) {
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
    this.router.navigate(['/']);
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
      'creator': new FormControl(''),
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
      'references': new FormControl(''),
      'scope': new FormControl(''),
    });
    this.routerSubscription = this.route.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.methodId = params['id'];
          this.methodService.getMethodById(this.methodId).subscribe(
            (method: Method) => null
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
