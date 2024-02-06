import { IsEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { Nominees } from '../entities/nominees.entity';

export class CreateNomineesDto {
  @IsString()
  @IsEmpty()
  firstName: string;

  @IsString()
  @IsEmpty()
  lastName: string;

  @IsPhoneNumber('ET')
  @IsEmpty()
  phoneNumber: string;

  static toEntity(dto: CreateNomineesDto): Nominees {
    const nominees = new Nominees();
    nominees.firstName = dto.firstName;
    nominees.lastName = dto.lastName;
    nominees.phoneNumber = dto.phoneNumber;
    return nominees;
  }
}
