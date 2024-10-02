import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    createQuestion(question: any): Promise<any>;
    assignQuestions(): Promise<void>;
}
