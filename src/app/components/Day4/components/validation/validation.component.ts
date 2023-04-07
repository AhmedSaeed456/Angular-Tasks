import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styles: [
  ]
})
export class ValidationComponent {
  formValidation = new FormGroup({
    name:new FormControl("initializedValue",Validators.required),
    age:new FormControl(0,[Validators.required,Validators.max(60),Validators.min(20)]),

  })
  get NameValid() {
    return this.formValidation.controls["name"].valid;
  }
  get AgeValid() {
    return this.formValidation.controls["age"].valid;
  }
  getValue() {
    console.log(this.formValidation.valid);
    console.log(this.formValidation.controls["name"].valid);
    console.log(this.formValidation.controls["age"].valid);
  }
}
