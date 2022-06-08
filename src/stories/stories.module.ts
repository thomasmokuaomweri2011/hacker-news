import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';

@Module({
  imports: [HttpModule],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule {}
