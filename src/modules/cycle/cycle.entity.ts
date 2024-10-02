import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Region } from "../region/region.entity";

@Entity({ name: 'cycle' })
export class Cycle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("timestamp")
  startTime: Date;

  @Column()
  duration: number;

  @ManyToOne(() => Region)
  region: Region;
}
