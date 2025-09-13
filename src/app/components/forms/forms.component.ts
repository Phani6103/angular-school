import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsMenuComponent } from './template-driven-signal-form/forms-menu.component';

@Component({
  selector: 'app-forms',
  imports: [RouterModule, FormsMenuComponent],
  templateUrl: './forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent {

}