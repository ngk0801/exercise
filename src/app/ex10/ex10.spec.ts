import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10Component } from './ex10';

describe('Ex10', () => {
  let component: Ex10Component;
  let fixture: ComponentFixture<Ex10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex10Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Ex10Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
