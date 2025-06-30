import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferralPage } from './referral-page';

describe('ReferralPage', () => {
  let component: ReferralPage;
  let fixture: ComponentFixture<ReferralPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
