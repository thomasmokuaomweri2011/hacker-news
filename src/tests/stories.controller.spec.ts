import { Test, TestingModule } from '@nestjs/testing';
import { StoriesService } from '../stories/stories.service';
import { StoriesController } from '../stories/stories.controller';

describe('StoriesController', () => {
  let storiesController: StoriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StoriesController],
      providers: [StoriesService],
    }).compile();

    storiesController = app.get<StoriesController>(StoriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(storiesController.getWordsFrom25Stories()).toBe('Hello World!');
    });
  });
});
