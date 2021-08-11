import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev2420Component } from './sdev2420.component';

describe('Sdev2420Component', () => {
  let component: Sdev2420Component;
  let fixture: ComponentFixture<Sdev2420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev2420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev2420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
