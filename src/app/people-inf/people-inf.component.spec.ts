import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInfComponent } from './people-inf.component';

describe('PeopleInfComponent', () => {
  let component: PeopleInfComponent;
  let fixture: ComponentFixture<PeopleInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
