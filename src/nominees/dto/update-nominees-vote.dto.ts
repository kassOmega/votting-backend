import { IsEmpty, IsNumber } from 'class-validator';
import { Nominees } from '../entities/nominees.entity';

export class UpdateNomineesVoteDto {
  @IsNumber()
  @IsEmpty()
  id: number;

  @IsNumber()
  vote: number;

  static toEntity(dto: UpdateNomineesVoteDto): Nominees {
    const nominees = new Nominees();
    nominees.id = dto.id;
    nominees.vote = dto.vote;
    return nominees;
  }
}
