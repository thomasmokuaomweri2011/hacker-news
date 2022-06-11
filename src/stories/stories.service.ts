import { Injectable } from '@nestjs/common';
import { map, tap } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StoriesService {
  constructor(private httpService: HttpService) {}
  getWordsFrom25Stories() {
    const response = this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(map((response) => response.data));

    return { response: response};
  }

  getWordsFromLastWeekStories() {
    return this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(map((response) => response.data));
  }

  getWordsFrom600Stories() {
    return this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(map((response) => response.data));
  }
}
