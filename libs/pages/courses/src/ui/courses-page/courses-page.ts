import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-courses-page',
  imports: [CommonModule],
  templateUrl: './courses-page.html',
  styleUrl: './courses-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPage {}
