import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationFilter } from './recommendation-filter';

describe('RecommendationFilter', () => {
  let component: RecommendationFilter;
  let fixture: ComponentFixture<RecommendationFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
