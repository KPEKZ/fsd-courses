import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-more-link',
  imports: [CommonModule],
  templateUrl: './more-link.html',
  styleUrl: './more-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreLink {}
