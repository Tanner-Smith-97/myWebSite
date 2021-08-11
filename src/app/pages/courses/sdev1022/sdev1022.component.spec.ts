import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev1022Component } from './sdev1022.component';

describe('Sdev1022Component', () => {
  let component: Sdev1022Component;
  let fixture: ComponentFixture<Sdev1022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev1022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
