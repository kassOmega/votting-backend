import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateNomineesDto } from './dto/update-nominees.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Nominees } from './entities/nominees.entity';
import { Repository } from 'typeorm';
import { CreateNomineesDto } from './dto/create-nominees.dto';

@Injectable()
export class NomineesService {
  constructor(
    @InjectRepository(Nominees)
    private readonly nomineesRepo: Repository<Nominees>,
  ) {}

  async create(cusomer: CreateNomineesDto) {
    const existingnominees = await this.nomineesRepo.findOneBy({
      phoneNumber: cusomer.phoneNumber,
    });
    if (existingnominees) {
      throw new BadRequestException('nominees Already exists');
    }
    return this.nomineesRepo.save(cusomer);
  }

  findAll() {
    const cusomer = this.nomineesRepo.find();
    return cusomer;
  }

  findOne(id: number) {
    const cusomer = this.nomineesRepo.findOneBy({ id });
    return cusomer;
  }
  findByPhone(phoneNumber: string) {
    const cusomer = this.nomineesRepo.findOneBy({ phoneNumber });
    return cusomer;
  }

  update(id: number, updatenomineesDto: UpdateNomineesDto) {
    const cusomer = this.nomineesRepo.findOneBy({ id });
    return this.nomineesRepo.save({ ...cusomer, ...updatenomineesDto });
  }

  remove(id: number) {
    return this.nomineesRepo.delete(id);
  }
}
