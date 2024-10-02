import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { QuestionService } from './modules/question/question.service';


@Injectable()
export class SchedulerService {
  constructor(private readonly questionService: QuestionService) {}

  //Cron job to run the task every Monday at 7 PM SGT
  @Cron('0 19 * * 1', { timeZone: 'Asia/Singapore' })
  handleCron() {
    this.questionService.assignQuestions();
  }
}