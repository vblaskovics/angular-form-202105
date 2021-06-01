import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.html',
})
export class DemoFormWithEventsComponent implements OnInit {
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
