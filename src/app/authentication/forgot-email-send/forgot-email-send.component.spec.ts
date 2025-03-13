import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotEmailSendComponent } from './forgot-email-send.component';

describe('ForgotEmailSendComponent', () => {
  let component: ForgotEmailSendComponent;
  let fixture: ComponentFixture<ForgotEmailSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotEmailSendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotEmailSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
