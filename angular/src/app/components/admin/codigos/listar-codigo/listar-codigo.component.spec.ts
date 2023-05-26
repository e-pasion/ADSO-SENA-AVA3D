import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCodigoComponent } from './listar-codigo.component';

describe('ListarCodigoComponent', () => {
  let component: ListarCodigoComponent;
  let fixture: ComponentFixture<ListarCodigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCodigoComponent]
    });
    fixture = TestBed.createComponent(ListarCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
