import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev1090Component } from './sdev1090.component';

describe('Sdev1090Component', () => {
  let component: Sdev1090Component;
  let fixture: ComponentFixture<Sdev1090Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev1090Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev1090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
