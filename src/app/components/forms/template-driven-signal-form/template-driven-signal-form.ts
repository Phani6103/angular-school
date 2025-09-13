import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupFormFields } from '../../../modal/signup-form-fields';
import { SignupFormService } from '../../../services/signup-form.service';

@Component({
  selector: 'app-template-driven',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './template-driven-signal-form.html',
  styleUrl: './template-driven-signal-form.scss'
})
export class TemplateDrivenSignalForm {
  private signupService = inject(SignupFormService);

  // Expose signals from the service directly to the template
  formState = this.signupService.formState;
  isFormValid = this.signupService.isFormValid;
  doPasswordsMatch = this.signupService.doPasswordsMatch;
  isEmailValid = this.signupService.isEmailValid;
  isPasswordStrong = this.signupService.isPasswordStrong;

  // Update service state when a form field changes
  onFieldChange<K extends keyof SignupFormFields>(field: K, value: SignupFormFields[K]) {
    this.signupService.updateFormState({ [field]: value });
  }

  onSubmit() {
    // Get the latest value from the signal for submission
    console.log('Form submitted:', this.formState());
    // You could now call another service method to send data to a backend
    // this.signupService.submitData(this.formState());
  }

  resetForm() {
    this.signupService.resetForm();
  }
}
