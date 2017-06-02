import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Method } from '../method.model';
import { MethodService } from "../method.service";

@Component({
  selector: 'method-add-edit',
  templateUrl: './method-add-edit.component.html',
  styles: []
})
export class MethodAddEditComponent implements OnInit, OnDestroy {
  methodForm: FormGroup;
  private methodId: number;
  private subscription: Subscription;
  private isNew = true;
  private method: Method;

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
    (<FormArray>this.methodForm.get('ingredients')).removeAt(index);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.methodId = +params['id'];
          this.methodService.getMethodById(this.methodId).subscribe(
            (method: Method) => this.method = method
          );
        } else {
          this.isNew = true;
          this.method = null;
        }
      }
    );

    let methodTitle = null;
    let methodThumbnail = null;
    let methodProceeding = null;
    const recipeIngredients = new FormArray([]);

    if (!this.isNew) {
      methodTitle = this.method.title;
      methodThumbnail = this.method.thumbnail;
      methodProceeding = this.method.proceeding;
    }

    this.methodForm = new FormGroup({
      'name': new FormControl(methodTitle, Validators.required),
      'imagePath': new FormControl(methodThumbnail, Validators.required),
      'description': new FormControl(methodProceeding, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
