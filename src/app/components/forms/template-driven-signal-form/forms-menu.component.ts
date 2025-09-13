import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forms-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './forms-menu.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsMenuComponent {

}