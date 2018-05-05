import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesProductsComponent } from './updates-products.component';

describe('UpdatesProductsComponent', () => {
  let component: UpdatesProductsComponent;
  let fixture: ComponentFixture<UpdatesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
