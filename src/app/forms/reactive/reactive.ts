import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  if (!value) {
    return null;
  }

  const errors: ValidationErrors = {};

  if (!/[A-Z]/.test(value)) {
    errors['hasUppercase'] = true;
  }
  if (!/[a-z]/.test(value)) {
    errors['hasLowercase'] = true;
  }
  if (!/\d/.test(value)) {
    errors['hasNumber'] = true;
  }
  if (!/[@$!%*?&]/.test(value)) {
    errors['hasSpecialChar'] = true;
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive.html',
  styleUrl: './reactive.scss'
})
export class Reactive implements OnInit {
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        passwordStrengthValidator
      ]),
      confirmPassword: new FormControl('', Validators.required),
      optInForNewsletter: new FormControl(false)
    });

    // Optional: Set initial values
    this.signupForm.patchValue({
      name: 'Test User Reactive',
      email: 'testReactive@example.com',
      password: 'Password@123',
      confirmPassword: 'Password@123',
      optInForNewsletter: true
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Reactive Form submitted:', this.signupForm.value);
    } else {
      console.log('Reactive Form is invalid');
    }
  }

  resetForm() {
    this.signupForm.reset();
  }
}
