import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-radio-button',
  imports: [CommonModule],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButton {}
