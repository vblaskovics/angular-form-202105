import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function createValidator(
  regexp: any,
  error: string
): (control: FormControl) => { [s: string]: boolean } {
  const regexpTester = new RegExp(regexp);
  return (control: FormControl) => {
    if (!regexpTester.test(control.value)) {
      return { [error]: true };
    }
    return {};
  };
}


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.html',
})
export class RegistrationFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          createValidator(/^[a-z ,.'-]+$/i, 'invalidName'),
        ]),
      ],
      email: ['', createValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'invalidEmail')],
      password: [
        '',
        Validators.compose([
          Validators.required,
          createValidator(/\d/, 'noNumberInPassword'),
        ]),
      ],
      passwordre: [
        '',
        Validators.compose([
          Validators.required,
          createValidator(/\d/, 'noNumberInPassword'),
        ]),
      ],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  validatePasswords() {
    if(this.myForm.get('password').value !== this.myForm.get('passwordre').value) {
      this.myForm.get('password').setErrors({invalidPassword:true});
      this.myForm.get('passwordre').setErrors({invalidPassword:true});
    } else {
      this.myForm.get('password').setErrors(null);
      this.myForm.get('passwordre').setErrors(null);
    }
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('Submitted:', value);
  }
}
