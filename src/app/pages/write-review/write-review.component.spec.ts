import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReviewComponent } from './write-review.component';

describe('WriteReviewComponent', () => {
  let component: WriteReviewComponent;
  let fixture: ComponentFixture<WriteReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
