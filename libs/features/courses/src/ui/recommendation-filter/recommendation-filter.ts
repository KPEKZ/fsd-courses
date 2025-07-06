import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-recommendation-filter',
  imports: [CommonModule],
  templateUrl: './recommendation-filter.html',
  styleUrl: './recommendation-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationFilter {}
