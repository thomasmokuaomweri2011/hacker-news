import { Injectable } from '@nestjs/common';
import { filter, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StoriesService {
  constructor(private httpService: HttpService) {}
  getWordsFrom25Stories() {
    return this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(filter((response) => 1 == 1))
      .pipe(map((response) => response.data));
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
