import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsBarComponent } from './person-details-bar.component';

describe('PersonDetailsBarComponent', () => {
  let component: PersonDetailsBarComponent;
  let fixture: ComponentFixture<PersonDetailsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetailsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
