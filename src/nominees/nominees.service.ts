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

  async create(nominee: CreateNomineesDto) {
    const existingnominees = await this.nomineesRepo.findOneBy({
      phoneNumber: nominee.phoneNumber,
    });
    if (existingnominees) {
      throw new BadRequestException('nominees Already exists');
    }
    return this.nomineesRepo.save(nominee);
  }

  findAll() {
    const nominee = this.nomineesRepo.find();
    return nominee;
  }

  findOne(id: number) {
    const nominee = this.nomineesRepo.findOneBy({ id });
    return nominee;
  }
  findByPhone(phoneNumber: string) {
    const nominee = this.nomineesRepo.findOneBy({ phoneNumber });
    return nominee;
  }

  update(id: number, updatenomineesDto: UpdateNomineesDto) {
    const nominee = this.nomineesRepo.findOneBy({ id });
    return this.nomineesRepo.save({ ...nominee, ...updatenomineesDto });
  }

  remove(id: number) {
    return this.nomineesRepo.delete(id);
  }
}
