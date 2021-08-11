import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev2220Component } from './sdev2220.component';

describe('Sdev2220Component', () => {
  let component: Sdev2220Component;
  let fixture: ComponentFixture<Sdev2220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev2220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev2220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
