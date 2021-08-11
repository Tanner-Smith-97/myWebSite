import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGameComponent } from './text-game.component';

describe('TextGameComponent', () => {
  let component: TextGameComponent;
  let fixture: ComponentFixture<TextGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
