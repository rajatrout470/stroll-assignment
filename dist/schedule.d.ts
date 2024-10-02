import { QuestionService } from './modules/question/question.service';
export declare class SchedulerService {
    private readonly questionService;
    constructor(questionService: QuestionService);
    handleCron(): void;
}
