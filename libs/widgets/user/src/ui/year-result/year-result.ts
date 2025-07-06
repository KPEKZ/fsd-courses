import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-year-result',
  imports: [CommonModule],
  templateUrl: './year-result.html',
  styleUrl: './year-result.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearResult {}
