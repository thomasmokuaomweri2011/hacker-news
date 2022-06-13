import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StoriesService {
  constructor(private httpService: HttpService) {}

  getWordsFrom25Stories() {
    const titles = [];
    const mostFrequent = (titles = [], num = 1) => {
      const map = {};
      let keys = [];
      for (let i = 0; i < titles.length; i++) {
        if (map[titles[i]]) {
          map[titles[i]]++;
        } else {
          map[titles[i]] = 1;
        }
      }
      for (const i in map) {
        keys.push(i);
      }
      keys = keys
        .sort((a, b) => {
          if (map[a] === map[b]) {
            if (a > b) {
              return 1;
            } else {
              return -1;
            }
          } else {
            return map[b] - map[a];
          }
        })
        .slice(0, num);
      return keys;
    };

    const stories = this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(map((response) => response.data));

    return stories.forEach((items) => {
      for (let i = 0; i <= 25; i++) {
        return this.httpService
          .get(
            `https://hacker-news.firebaseio.com/v0/item/${items[i]}.json?print=pretty`,
          )
          .pipe(map((response) => response.data))
          .subscribe({
            next(item) {
              console.log(mostFrequent([item.title], 10));
            },
          });
      }
    });
  }

  getWordsFromLastWeekStories() {
    //To be completed
    return this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(map((response) => response.data));
  }

  getWordsFrom600Stories() {
    //To be completed
    return this.httpService
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .pipe(map((response) => response.data));
  }
}
