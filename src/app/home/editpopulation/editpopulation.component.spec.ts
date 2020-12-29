import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpopulationComponent } from './editpopulation.component';

describe('EditpopulationComponent', () => {
  let component: EditpopulationComponent;
  let fixture: ComponentFixture<EditpopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
