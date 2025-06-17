import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-help-page',
  imports: [CommonModule],
  templateUrl: './help-page.html',
  styleUrl: './help-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpPage {}
