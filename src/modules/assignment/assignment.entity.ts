import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Region } from "../region/region.entity";
import { Question } from "../question/entities/question.entity";
import { Cycle } from "../cycle/cycle.entity";

@Entity({ name: 'assignment' })
export class Assignment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Region)
  region: Region;

  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Cycle)
  cycle: Cycle;
}
