import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequiresDocumentComponent } from './list-requires-document.component';

describe('ListRequiresDocumentComponent', () => {
  let component: ListRequiresDocumentComponent;
  let fixture: ComponentFixture<ListRequiresDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequiresDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequiresDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
