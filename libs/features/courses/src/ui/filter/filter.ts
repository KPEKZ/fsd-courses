import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-filter',
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filter {}
