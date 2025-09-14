import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupFormService } from '../../../services/signup-form.service';
import { SignupFormFields } from '../../../modal/signup-form-fields';

@Component({
  selector: 'app-template-driven-signal-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-signal-form.html',
  styleUrl: './template-driven-signal-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenSignalFormComponent {
  private signupService = inject(SignupFormService);

  // Expose signals and state from the service to the template
  formState = this.signupService.formState;
  isFormValid = this.signupService.isFormValid;
  doPasswordsMatch = this.signupService.doPasswordsMatch;
  isEmailValid = this.signupService.isEmailValid;
  isPasswordStrong = this.signupService.isPasswordStrong;
  // API states
  loading = this.signupService.loading;
  error = this.signupService.error;

  // This method allows the template to update the signal state in the service
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