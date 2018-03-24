import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaceComponent } from './palace.component';

describe('PalaceComponent', () => {
  let component: PalaceComponent;
  let fixture: ComponentFixture<PalaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
