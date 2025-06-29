import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-raging',
  imports: [CommonModule],
  templateUrl: './raging.html',
  styleUrl: './raging.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Raging {}
