import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { ModalPhotographerComponent } from './modal-photographer/modal-photographer.component';
import { ModalPhotographerComponent } from './modal-photographer.component';
describe('ModalApproveComponent', () => {
  let component: ModalPhotographerComponent;
  let fixture: ComponentFixture<ModalPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
