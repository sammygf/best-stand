import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsRasterComponent } from './requirements-raster.component';

describe('RequirementsRasterComponent', () => {
  let component: RequirementsRasterComponent;
  let fixture: ComponentFixture<RequirementsRasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsRasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsRasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
