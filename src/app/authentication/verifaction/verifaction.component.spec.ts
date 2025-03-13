import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifactionComponent } from './verifaction.component';

describe('VerifactionComponent', () => {
  let component: VerifactionComponent;
  let fixture: ComponentFixture<VerifactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
