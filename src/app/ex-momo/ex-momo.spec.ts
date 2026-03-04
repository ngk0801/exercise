import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMomoComponent } from './ex-momo';

describe('ExMomoComponent', () => {
  let component: ExMomoComponent;
  let fixture: ComponentFixture<ExMomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExMomoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExMomoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
