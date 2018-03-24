import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercenterComponent } from './ordercenter.component';

describe('OrdercenterComponent', () => {
  let component: OrdercenterComponent;
  let fixture: ComponentFixture<OrdercenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
