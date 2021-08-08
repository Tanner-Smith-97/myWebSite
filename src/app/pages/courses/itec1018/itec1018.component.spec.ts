import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itec1018Component } from './itec1018.component';

describe('Itec1018Component', () => {
  let component: Itec1018Component;
  let fixture: ComponentFixture<Itec1018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itec1018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itec1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
