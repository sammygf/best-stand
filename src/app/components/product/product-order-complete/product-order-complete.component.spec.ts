import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderCompleteComponent } from './product-order-complete.component';

describe('ProductOrderCompleteComponent', () => {
  let component: ProductOrderCompleteComponent;
  let fixture: ComponentFixture<ProductOrderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
