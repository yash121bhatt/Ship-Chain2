import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOtherComponent } from './verify-other.component';

describe('VerifyOtherComponent', () => {
  let component: VerifyOtherComponent;
  let fixture: ComponentFixture<VerifyOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
