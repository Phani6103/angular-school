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
  // API states
  loading = this.signupService.loading;
  error = this.signupService.error;

  // Update service state when a form field changes
  onFieldChange<K extends keyof SignupFormFields>(field: K, value: SignupFormFields[K]) {
    this.signupService.updateFormState({ [field]: value });
  }

  onSubmit() {
    // Delegate submission to the service
    this.signupService.submitForm();
  }

  resetForm() {
    this.signupService.resetForm();
  }
}
