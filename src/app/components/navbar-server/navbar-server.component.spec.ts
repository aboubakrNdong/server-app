import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarServerComponent } from './navbar-server.component';

describe('ServerShowComponent', () => {
  let component: NavbarServerComponent;
  let fixture: ComponentFixture<NavbarServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
