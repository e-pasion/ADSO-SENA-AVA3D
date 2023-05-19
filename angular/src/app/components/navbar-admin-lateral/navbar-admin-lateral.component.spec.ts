import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminLateralComponent } from './navbar-admin-lateral.component';

describe('NavbarAdminLateralComponent', () => {
  let component: NavbarAdminLateralComponent;
  let fixture: ComponentFixture<NavbarAdminLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAdminLateralComponent]
    });
    fixture = TestBed.createComponent(NavbarAdminLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
