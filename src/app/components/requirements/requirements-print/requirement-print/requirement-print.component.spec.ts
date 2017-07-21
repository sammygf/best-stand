import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementPrintComponent } from './requirement-print.component';

describe('RequirementPrintComponent', () => {
  let component: RequirementPrintComponent;
  let fixture: ComponentFixture<RequirementPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
