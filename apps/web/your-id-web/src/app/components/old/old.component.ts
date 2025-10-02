import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NewStore } from '../../services/new/new.service';

@Component({
  selector: 'app-old',
  imports: [],
  templateUrl: './old.component.html',
  styleUrl: './old.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OldComponent {
    isLoading = input.required<boolean>();
}
