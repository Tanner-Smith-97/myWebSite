import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev2110Component } from './sdev2110.component';

describe('Sdev2110Component', () => {
  let component: Sdev2110Component;
  let fixture: ComponentFixture<Sdev2110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev2110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev2110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
