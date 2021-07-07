import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSelectionComponent } from './person-selection.component';

describe('PersonSelectionComponent', () => {
  let component: PersonSelectionComponent;
  let fixture: ComponentFixture<PersonSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
