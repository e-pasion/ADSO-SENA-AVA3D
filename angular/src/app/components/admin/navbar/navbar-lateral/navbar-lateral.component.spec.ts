import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLateralComponent } from './navbar-lateral.component';

describe('NavbarLateralComponent', () => {
  let component: NavbarLateralComponent;
  let fixture: ComponentFixture<NavbarLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLateralComponent]
    });
    fixture = TestBed.createComponent(NavbarLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
