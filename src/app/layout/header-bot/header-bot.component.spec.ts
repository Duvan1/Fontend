import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBotComponent } from './header-bot.component';

describe('HeaderBotComponent', () => {
  let component: HeaderBotComponent;
  let fixture: ComponentFixture<HeaderBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
