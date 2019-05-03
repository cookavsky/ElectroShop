import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = '../assets/News.json';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(URL);
  }
}
