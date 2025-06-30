import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-referral-page',
  imports: [CommonModule],
  templateUrl: './referral-page.html',
  styleUrl: './referral-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferralPage {}
