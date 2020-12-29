import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpopulationComponent } from './addpopulation.component';

describe('AddpopulationComponent', () => {
  let component: AddpopulationComponent;
  let fixture: ComponentFixture<AddpopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
