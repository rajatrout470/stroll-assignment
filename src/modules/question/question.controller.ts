import { Controller, Post } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async createQuestion(question) {
    return await this.questionService.createQuestion(question)
  }

  @Post('assign')
  assignQuestions() {
    return this.questionService.assignQuestions();
  }
}
