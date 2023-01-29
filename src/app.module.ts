import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollController } from './modules/polls/poll.controller';
import { PollService } from './modules/service/poll.service';

@Module({
  imports: [],
  controllers: [AppController, PollController],
  providers: [AppService, PollService],
})
export class AppModule {}
