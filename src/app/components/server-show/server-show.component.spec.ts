import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerShowComponent } from './server-show.component';

describe('ServerShowComponent', () => {
  let component: ServerShowComponent;
  let fixture: ComponentFixture<ServerShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
