import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewadsComponent } from './newads.component';

describe('NewadsComponent', () => {
  let component: NewadsComponent;
  let fixture: ComponentFixture<NewadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
