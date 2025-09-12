import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupFormFields } from '../../modal/signup-form-fields';

@Component({
  selector: 'app-template-driven',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.scss'
})
export class TemplateDriven implements OnInit {
  form: SignupFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    optInForNewsletter: false,
  };

  ngOnInit() {
    // Initialization logic if needed
    this.form = {
      name: 'Test User',
      email: 'testUser@gmail.com',
      password: '12345',
      confirmPassword: '12345',
      optInForNewsletter: true,
    };
  }

  validatePasswordMatch(): boolean {
    if (!this.form.password || !this.form.confirmPassword) return false;
    return this.form.password === this.form.confirmPassword;
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.form.email);
  }

  isPasswordStrong(): boolean {
    // At least 8 characters, one uppercase, one lowercase, one number, one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(this.form.password);
  }


  get isFormValid(): boolean {
    return this.form.name.trim() !== '' &&
           this.form.email.trim() !== '' &&
           this.validatePasswordMatch() &&
           this.isEmailValid() &&
           this.isPasswordStrong();
  }

  onSubmit(form: SignupFormFields) {
    console.log('Form submitted:', form);
  }

  resetForm(form: any) {
    form.reset();
  }
}
