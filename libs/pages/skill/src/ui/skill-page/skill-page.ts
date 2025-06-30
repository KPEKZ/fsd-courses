import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-skill-page',
  imports: [CommonModule],
  templateUrl: './skill-page.html',
  styleUrl: './skill-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillPage {}
