import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServerComponent } from './add-server.component';


describe('ServerModalComponent', () => {
  let component: AddServerComponent;
  let fixture: ComponentFixture<AddServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
