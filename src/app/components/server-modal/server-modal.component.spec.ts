import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerModalComponent } from './server-modal.component';

describe('ServerModalComponent', () => {
  let component: ServerModalComponent;
  let fixture: ComponentFixture<ServerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
