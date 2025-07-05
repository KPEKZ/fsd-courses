import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStat } from './user-stat';

describe('UserStat', () => {
  let component: UserStat;
  let fixture: ComponentFixture<UserStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStat],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
