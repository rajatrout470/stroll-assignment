import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LessThanOrEqual, Repository } from "typeorm";
import { Question } from "./entities/question.entity";
import { Assignment } from "../assignment/assignment.entity";
import { Region } from "../region/region.entity";
import { Cycle } from "../cycle/cycle.entity";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Cycle)
    private cycleRepository: Repository<Cycle>,
    @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
    @InjectRepository(Region)
    private regionRepository: Repository<Region>
  ) {}

  async createQuestion(question) {
    return await this.questionRepository.save(question);
  }

  async assignQuestions() {
    const regions = await this.regionRepository.find();

    for (const region of regions) {
      const cycle = await this.getCurrentCycle(region);
      const question = await this.getQuestionForCycle(region, cycle);
      await this.assignmentRepository.save({
        region,
        question,
        cycle,
      });
    }
  }

  async getCurrentCycle(region) {
    const currentDate = new Date();
    return await this.cycleRepository.findOne({
      where: { region, startTime: LessThanOrEqual(currentDate) },
      order: { startTime: "DESC" },
    });
  }

  async getQuestionForCycle(region, cycle) {
    const currentTime = new Date();
    const question = await this.questionRepository.find({ where: region });
    const elapsedTime = currentTime.getTime() - cycle.startTime.getTime();
    const cycleDuration = cycle.duration * 86400000; // Convert duration days into milisecond
    const cycleIndex = Math.floor(elapsedTime/cycleDuration) % question.length;
    return question[cycleIndex];
  }
}
