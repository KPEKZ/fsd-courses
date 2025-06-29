import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Raging } from './raging';

describe('Raging', () => {
  let component: Raging;
  let fixture: ComponentFixture<Raging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raging],
    }).compileComponents();

    fixture = TestBed.createComponent(Raging);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
