import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearColorComponent } from './crear-color.component';

describe('CrearColorComponent', () => {
  let component: CrearColorComponent;
  let fixture: ComponentFixture<CrearColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearColorComponent]
    });
    fixture = TestBed.createComponent(CrearColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
