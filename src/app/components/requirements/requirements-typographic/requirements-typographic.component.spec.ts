import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsTypographicComponent } from './requirements-typographic.component';

describe('RequirementsTypographicComponent', () => {
  let component: RequirementsTypographicComponent;
  let fixture: ComponentFixture<RequirementsTypographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsTypographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsTypographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
