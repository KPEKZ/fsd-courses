import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-info-box',
  imports: [CommonModule],
  templateUrl: './info-box.html',
  styleUrl: './info-box.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBox {}
