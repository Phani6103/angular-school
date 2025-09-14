import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsMenuComponent } from './template-driven-signal-form/forms-menu.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [RouterModule, FormsMenuComponent],
  templateUrl: './forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent {

}