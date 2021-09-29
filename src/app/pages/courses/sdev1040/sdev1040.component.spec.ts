import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDEV1040Component } from './sdev1040.component';

describe('SDEV1040Component', () => {
  let component: SDEV1040Component;
  let fixture: ComponentFixture<SDEV1040Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDEV1040Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDEV1040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
