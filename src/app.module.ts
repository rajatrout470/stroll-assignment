import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionModule } from './modules/region/region.module';
import { Region } from './modules/region/region.entity';
import { Question } from './modules/question/entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Region, Question], // Make sure both entities are listed here
      autoLoadEntities: true,
      synchronize: true, // Do not use synchronize in production
    }),
    RegionModule, // Import the User module
  ],
})
export class AppModule {}
