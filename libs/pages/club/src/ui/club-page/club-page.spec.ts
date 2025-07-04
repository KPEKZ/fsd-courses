import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubPage } from './club-page';

describe('ClubPage', () => {
  let component: ClubPage;
  let fixture: ComponentFixture<ClubPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
