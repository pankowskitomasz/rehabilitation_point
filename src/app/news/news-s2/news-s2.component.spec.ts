import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsS2Component } from './news-s2.component';

describe('NewsS2Component', () => {
  let component: NewsS2Component;
  let fixture: ComponentFixture<NewsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
