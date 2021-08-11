import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev1041Component } from './sdev1041.component';

describe('Sdev1041Component', () => {
  let component: Sdev1041Component;
  let fixture: ComponentFixture<Sdev1041Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev1041Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev1041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
