import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playstation1Component } from './playstation1.component';

describe('Playstation1Component', () => {
  let component: Playstation1Component;
  let fixture: ComponentFixture<Playstation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playstation1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playstation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
