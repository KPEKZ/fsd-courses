import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiAvatar } from './ai-avatar';

describe('AiAvatar', () => {
  let component: AiAvatar;
  let fixture: ComponentFixture<AiAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(AiAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
