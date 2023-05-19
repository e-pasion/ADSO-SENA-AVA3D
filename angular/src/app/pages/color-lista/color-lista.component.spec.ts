import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListaComponent } from './color-lista.component';

describe('ColorListaComponent', () => {
  let component: ColorListaComponent;
  let fixture: ComponentFixture<ColorListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorListaComponent]
    });
    fixture = TestBed.createComponent(ColorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
