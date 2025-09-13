import { Component, inject } from '@angular/core';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private sharedStateService = inject(SharedStateService);
  protected readonly title = this.sharedStateService.title.asReadonly();
}
