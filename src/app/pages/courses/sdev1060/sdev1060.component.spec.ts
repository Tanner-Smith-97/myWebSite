import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev1060Component } from './sdev1060.component';

describe('Sdev1060Component', () => {
  let component: Sdev1060Component;
  let fixture: ComponentFixture<Sdev1060Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev1060Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev1060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
