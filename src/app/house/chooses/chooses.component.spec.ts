import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosesComponent } from './chooses.component';

describe('ChoosesComponent', () => {
  let component: ChoosesComponent;
  let fixture: ComponentFixture<ChoosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
