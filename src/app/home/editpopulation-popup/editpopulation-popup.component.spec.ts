import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpopulationPopupComponent } from './editpopulation-popup.component';

describe('EditpopulationPopupComponent', () => {
  let component: EditpopulationPopupComponent;
  let fixture: ComponentFixture<EditpopulationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpopulationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpopulationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
