import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsVectorComponent } from './requirements-vector.component';

describe('RequirementsVectorComponent', () => {
  let component: RequirementsVectorComponent;
  let fixture: ComponentFixture<RequirementsVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
