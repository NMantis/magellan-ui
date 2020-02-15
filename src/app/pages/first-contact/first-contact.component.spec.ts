import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContactComponent } from './first-contact.component';

describe('FirstContactComponent', () => {
  let component: FirstContactComponent;
  let fixture: ComponentFixture<FirstContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
