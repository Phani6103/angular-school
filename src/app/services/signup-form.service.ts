import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';
import { SignupFormFields } from '../modal/signup-form-fields';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {
  // 1. The form's state is held in a signal
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);

  readonly formState = signal<SignupFormFields>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    optInForNewsletter: false,
  });

  // API interaction states
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

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
    if (isPlatformBrowser(this.platformId)) {
      // 1. On startup, try to load the form state from localStorage.
      const savedState = localStorage.getItem('signupFormState');
      if (savedState) {
        this.formState.set(JSON.parse(savedState));
      }

      // 2. Create an effect that automatically saves the form state to localStorage
      //    whenever the formState signal changes.
      effect(() => {
        const state = this.formState();
        console.log('Effect triggered: Saving form state to localStorage', state);
        localStorage.setItem('signupFormState', JSON.stringify(state));
      });
    }
  }

  // A method to update the state from the component
  updateFormState(newState: Partial<SignupFormFields>) {
    this.formState.update(currentState => ({ ...currentState, ...newState }));
  }

  resetForm() {
    this.formState.set({ name: '', email: '', password: '', confirmPassword: '', optInForNewsletter: false });
  }

  // Method to submit the form data to a sample API
  submitForm() {
    if (!this.isFormValid()) return;

    this.loading.set(true);
    this.error.set(null);

    // We don't send the confirmPassword field to the backend
    const { confirmPassword, ...payload } = this.formState();

    this.http.post('https://jsonplaceholder.typicode.com/users', payload).pipe(
      tap(response => {
        console.log('API Success Response:', response);
        alert('Form submitted successfully!');
        this.resetForm();
      }),
      catchError(err => {
        console.error('API Error:', err);
        this.error.set('Failed to submit the form. Please try again later.');
        return of(null); // Return a safe observable to complete the stream
      })
    ).subscribe(() => this.loading.set(false));
  }
}
