import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { NewsS1Component } from './news-s1/news-s1.component';
import { NewsS2Component } from './news-s2/news-s2.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsS1Component,
    NewsS2Component
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
