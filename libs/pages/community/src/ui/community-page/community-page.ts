import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-community-page',
  imports: [CommonModule],
  templateUrl: './community-page.html',
  styleUrl: './community-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityPage {}
