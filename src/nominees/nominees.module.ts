import { Module } from '@nestjs/common';
import { NomineesService } from './nominees.service';
import { NomineesController } from './nominees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nominees } from './entities/nominees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nominees])],
  controllers: [NomineesController],
  providers: [NomineesService],
})
export class NomineesModule {}
