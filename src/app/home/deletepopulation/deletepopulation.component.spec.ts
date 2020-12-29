import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepopulationComponent } from './deletepopulation.component';

describe('DeletepopulationComponent', () => {
  let component: DeletepopulationComponent;
  let fixture: ComponentFixture<DeletepopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
