import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./components/menu/menu";
import { SharedStateService } from './services/shared-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly sharedStateService = inject(SharedStateService);
  protected readonly title = this.sharedStateService.title.asReadonly();
}
