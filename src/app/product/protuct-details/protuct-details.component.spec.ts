import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtuctDetailsComponent } from './protuct-details.component';

describe('ProtuctDetailsComponent', () => {
  let component: ProtuctDetailsComponent;
  let fixture: ComponentFixture<ProtuctDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtuctDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtuctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
