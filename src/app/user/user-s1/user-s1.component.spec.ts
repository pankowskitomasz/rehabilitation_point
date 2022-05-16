import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserS1Component } from './user-s1.component';

describe('UserS1Component', () => {
  let component: UserS1Component;
  let fixture: ComponentFixture<UserS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
