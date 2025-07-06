import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearResult } from './year-result';

describe('YearResult', () => {
  let component: YearResult;
  let fixture: ComponentFixture<YearResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearResult],
    }).compileComponents();

    fixture = TestBed.createComponent(YearResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
