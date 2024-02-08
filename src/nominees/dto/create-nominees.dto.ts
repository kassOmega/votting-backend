import { IsEmpty, IsString } from 'class-validator';
import { Nominees } from '../entities/nominees.entity';

export class CreateNomineesDto {
  @IsString()
  @IsEmpty()
  fullName: string;

  @IsString()
  @IsEmpty()
  vote: number;

  static toEntity(dto: CreateNomineesDto): Nominees {
    const nominees = new Nominees();
    nominees.fullName = dto.fullName;
    nominees.vote = dto.vote;
    return nominees;
  }
}
