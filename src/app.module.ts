import { Module } from '@nestjs/common';
import { StoriesModule } from './stories/stories.module';

@Module({
  imports: [StoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
