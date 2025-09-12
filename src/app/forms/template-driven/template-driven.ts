import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  optInForNewsletter: boolean = false;

  ngOnInit() {
    // Initialization logic if needed
    this.name = 'Test User';
    this.email = 'testUser@gmail.com';
    this.password = '12345';
    this.confirmPassword = '12345';
    this.optInForNewsletter = true;
  }

  validatePasswordMatch(): boolean {
    if (!this.password || !this.confirmPassword) return false;
    return this.password === this.confirmPassword;
  }

  get isFormValid(): boolean {
    return this.name.trim() !== '' &&
           this.email.trim() !== '' &&
           this.validatePasswordMatch();
  }

  onSubmit(form: any) {
    console.log('Form submitted:', form);
  }

  resetForm(form: any) {
    form.reset();
  }
}
