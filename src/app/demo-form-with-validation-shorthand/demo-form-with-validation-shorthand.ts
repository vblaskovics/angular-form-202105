import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validation-shorthand',
  templateUrl: './demo-form-with-validation-shorthand.html',
})
export class DemoFormWithValidationShorthandComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required] 
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('Submitted:', value);
  }

}
