import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRequiredDocumentComponent } from './modal-required-document.component';

describe('ModalRequiredDocumentComponent', () => {
  let component: ModalRequiredDocumentComponent;
  let fixture: ComponentFixture<ModalRequiredDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRequiredDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRequiredDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
