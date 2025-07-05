import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ai-avatar',
  imports: [CommonModule],
  templateUrl: './ai-avatar.html',
  styleUrl: './ai-avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiAvatar {}
