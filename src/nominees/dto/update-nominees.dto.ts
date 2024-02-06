import { PartialType } from '@nestjs/mapped-types';
import { CreateNomineesDto } from './create-nominees.dto';

export class UpdateNomineesDto extends PartialType(CreateNomineesDto) {}
