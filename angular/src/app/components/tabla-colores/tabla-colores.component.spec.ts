import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaColoresComponent } from './tabla-colores.component';

describe('TablaColoresComponent', () => {
  let component: TablaColoresComponent;
  let fixture: ComponentFixture<TablaColoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaColoresComponent]
    });
    fixture = TestBed.createComponent(TablaColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
