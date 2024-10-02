import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Region } from '../../region/region.entity';

@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => Region, (region) => region.questions)
  region: Region;
}