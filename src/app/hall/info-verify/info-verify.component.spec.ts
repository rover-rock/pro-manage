import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVerifyComponent } from './info-verify.component';

describe('InfoVerifyComponent', () => {
  let component: InfoVerifyComponent;
  let fixture: ComponentFixture<InfoVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
