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
      fullName: nominee.fullName,
    });
    if (existingnominees) {
      throw new BadRequestException('nominee Already exists');
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
  findByPhone(fullName: string) {
    const nominee = this.nomineesRepo.findOneBy({ fullName });
    return nominee;
  }

  update(id: number, updatenomineesDto: UpdateNomineesDto) {
    const nominee = this.nomineesRepo.findOneBy({ id });
    return this.nomineesRepo.save({ ...nominee, ...updatenomineesDto });
  }
  async updateVote(id: number, updatenomineesDto: UpdateNomineesDto) {
    const nominee = await this.nomineesRepo.findOneBy({ id });
    const { vote, ...other } = nominee;
    const newVote = vote + updatenomineesDto.vote;
    return await this.nomineesRepo.update(id, { ...other, vote: newVote });
  }

  remove(id: number) {
    return this.nomineesRepo.delete(id);
  }
}
