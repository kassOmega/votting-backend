import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NomineesService } from './nominees.service';
import { CreateNomineesDto, UpdateNomineesDto } from './dto';
import { UpdateNomineesVoteDto } from './dto/update-nominees-vote.dto';

@Controller('nominees')
export class NomineesController {
  constructor(private readonly nomineesService: NomineesService) {}
  @Post()
  create(@Body() createnomineesDtos: CreateNomineesDto[]) {
    createnomineesDtos.map((createnomineesDto) => {
      const nominees = CreateNomineesDto.toEntity(createnomineesDto);
      return this.nomineesService.create(nominees);
    });
  }
  @Patch('vote')
  updateVote(@Body() updatenomineesDtos: UpdateNomineesVoteDto[]) {
    console.log(updatenomineesDtos);
    updatenomineesDtos.map((updatenomineesDto) => {
      const nominees = UpdateNomineesVoteDto.toEntity(updatenomineesDto);
      return this.nomineesService.updateVote(nominees.id, nominees);
    });
  }
  @Get()
  findAll() {
    return this.nomineesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nomineesService.findOne(id);
  }
  @Get('phone/:phone')
  findPhone(@Param('phone') phone: string) {
    return this.nomineesService.findByPhone(phone);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updatenomineesDto: UpdateNomineesDto,
  ) {
    return this.nomineesService.update(id, updatenomineesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.nomineesService.remove(id);
  }
}
