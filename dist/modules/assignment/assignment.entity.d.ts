import { Region } from "../region/region.entity";
import { Question } from "../question/entities/question.entity";
import { Cycle } from "../cycle/cycle.entity";
export declare class Assignment {
    id: string;
    region: Region;
    question: Question;
    cycle: Cycle;
}
