import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarrierInListComponent } from './show-carrier-in-list.component';

describe('ShowCarrierInListComponent', () => {
  let component: ShowCarrierInListComponent;
  let fixture: ComponentFixture<ShowCarrierInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCarrierInListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCarrierInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
