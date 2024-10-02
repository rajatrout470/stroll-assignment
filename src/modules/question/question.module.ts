import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { Question } from './entities/question.entity';
import { Region } from '../region/region.entity';
import { Assignment } from '../assignment/assignment.entity';
import { Cycle } from '../cycle/cycle.entity';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Region, Assignment, Cycle])], // Register the User entity
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class UserModule {}