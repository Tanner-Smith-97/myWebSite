import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev2410Component } from './sdev2410.component';

describe('Sdev2410Component', () => {
  let component: Sdev2410Component;
  let fixture: ComponentFixture<Sdev2410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev2410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev2410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
