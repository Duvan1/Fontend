import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFootComponent } from './banner-foot.component';

describe('BannerFootComponent', () => {
  let component: BannerFootComponent;
  let fixture: ComponentFixture<BannerFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
