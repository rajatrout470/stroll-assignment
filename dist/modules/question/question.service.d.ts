import { Repository } from "typeorm";
import { Question } from "./entities/question.entity";
import { Assignment } from "../assignment/assignment.entity";
import { Region } from "../region/region.entity";
import { Cycle } from "../cycle/cycle.entity";
export declare class QuestionService {
    private questionRepository;
    private cycleRepository;
    private assignmentRepository;
    private regionRepository;
    constructor(questionRepository: Repository<Question>, cycleRepository: Repository<Cycle>, assignmentRepository: Repository<Assignment>, regionRepository: Repository<Region>);
    createQuestion(question: any): Promise<any>;
    assignQuestions(): Promise<void>;
    getCurrentCycle(region: any): Promise<Cycle>;
    getQuestionForCycle(region: any, cycle: any): Promise<Question>;
}
