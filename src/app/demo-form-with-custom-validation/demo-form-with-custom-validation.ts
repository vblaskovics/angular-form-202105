import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.html',
})
export class DemoFormWithCustomValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required] 
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('Submitted:', value);
  }

}
