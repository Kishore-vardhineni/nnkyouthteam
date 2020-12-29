import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpopulationPopupComponent } from './addpopulation-popup.component';

describe('AddpopulationPopupComponent', () => {
  let component: AddpopulationPopupComponent;
  let fixture: ComponentFixture<AddpopulationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpopulationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpopulationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
