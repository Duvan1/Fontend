import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCategoriasComponent } from './stats-categorias.component';

describe('StatsCategoriasComponent', () => {
  let component: StatsCategoriasComponent;
  let fixture: ComponentFixture<StatsCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
