import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev2210Component } from './sdev2210.component';

describe('Sdev2210Component', () => {
  let component: Sdev2210Component;
  let fixture: ComponentFixture<Sdev2210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev2210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev2210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
