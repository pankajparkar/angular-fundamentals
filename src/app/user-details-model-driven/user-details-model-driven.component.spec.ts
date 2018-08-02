import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsModelDrivenComponent } from './user-details-model-driven.component';

describe('UserDetailsModelDrivenComponent', () => {
  let component: UserDetailsModelDrivenComponent;
  let fixture: ComponentFixture<UserDetailsModelDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsModelDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
