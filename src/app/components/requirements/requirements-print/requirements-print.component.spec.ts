import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsPrintComponent } from './requirements-print.component';

describe('RequirementsPrintComponent', () => {
  let component: RequirementsPrintComponent;
  let fixture: ComponentFixture<RequirementsPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
