import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsS1Component } from './news-s1.component';

describe('NewsS1Component', () => {
  let component: NewsS1Component;
  let fixture: ComponentFixture<NewsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
