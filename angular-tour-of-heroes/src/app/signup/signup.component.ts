import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  
  signUpClicked() {
    if (this.signUpForm) {
      console.log('Email: ', this.signUpForm.get('email')?.value);
      console.log('Password: ', this.signUpForm.get('password')?.value);
    }
  }
}
