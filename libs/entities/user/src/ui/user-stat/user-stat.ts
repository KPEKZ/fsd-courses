import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-user-stat',
  imports: [CommonModule],
  templateUrl: './user-stat.html',
  styleUrl: './user-stat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStat {}
