import { Controller, Get, Render } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get('25')
  @Render('index')
  getWordsFromLast25Stories() {
    return this.storiesService.getWordsFrom25Stories();
  }

  @Get('last-week')
  getWordsFromLastWeekStories() {
    return this.storiesService.getWordsFromLastWeekStories();
  }

  @Get('600')
  getWordsFrom600Stories() {
    return this.storiesService.getWordsFrom600Stories();
  }
}
