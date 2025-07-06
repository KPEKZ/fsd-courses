import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreLink } from './more-link';

describe('MoreLink', () => {
  let component: MoreLink;
  let fixture: ComponentFixture<MoreLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreLink],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
