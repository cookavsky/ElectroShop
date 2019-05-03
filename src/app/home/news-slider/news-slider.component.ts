import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';
import { Result } from './result';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css'],
})
export class NewsSliderComponent implements OnInit {
  NewsArray: object[];

  constructor(private News: NewsService) {
    this.NewsArray = [];
   }

  ngOnInit() {
    this.News.getNews().subscribe((result: Result) => {
      this.NewsArray = result.NewsArray;
    });
  }
}
