import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.html',
})
export class DemoFormNgModelComponent implements OnInit {
  productName: string;

  constructor() {
    this.productName = 'Angular Handbook';
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('Submitted:', value);
  }

}
