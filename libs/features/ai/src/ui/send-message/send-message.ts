import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-send-message',
  imports: [CommonModule],
  templateUrl: './send-message.html',
  styleUrl: './send-message.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendMessage {}
