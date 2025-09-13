import { Injectable, signal, computed } from '@angular/core';
import { SignupFormFields } from '../modal/signup-form-fields';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {
  // 1. The form's state is held in a signal
  readonly formState = signal<SignupFormFields>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    optInForNewsletter: false,
  });

  // 2. Computed signals for reactive, memoized validation
  readonly isEmailValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.formState().email);
  });

  readonly isPasswordStrong = computed(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(this.formState().password);
  });

  readonly doPasswordsMatch = computed(() => {
    const form = this.formState();
    if (!form.password || !form.confirmPassword) {
      return false;
    }
    return form.password === form.confirmPassword;
  });

  readonly isFormValid = computed(() => {
    const form = this.formState();
    return form.name.trim() !== '' &&
           this.isEmailValid() &&
           this.isPasswordStrong() &&
           this.doPasswordsMatch();
  });

  constructor() {
    // Set initial test data, moved from the component's ngOnInit
    this.formState.set({
      name: 'Test User',
      email: 'testUser@gmail.com',
      password: '12345',
      confirmPassword: '12345',
      optInForNewsletter: true,
    });
  }

  // 3. A method to update the state from the component
  updateFormState(newState: Partial<SignupFormFields>) {
    this.formState.update(currentState => ({ ...currentState, ...newState }));
  }

  resetForm() {
    this.formState.set({ name: '', email: '', password: '', confirmPassword: '', optInForNewsletter: false });
  }
}