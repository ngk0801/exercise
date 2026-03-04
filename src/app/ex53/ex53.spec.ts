import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex53 } from './ex53';

describe('Ex53', () => {
  let component: Ex53;
  let fixture: ComponentFixture<Ex53>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex53]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex53);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
