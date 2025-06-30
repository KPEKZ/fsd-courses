import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-club-page',
  imports: [CommonModule],
  templateUrl: './club-page.html',
  styleUrl: './club-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubPage {}
