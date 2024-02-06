import { Test, TestingModule } from '@nestjs/testing';
import { NomineesController } from './nominees.controller';
import { NomineesService } from './nominees.service';

describe('NomineesController', () => {
  let controller: NomineesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomineesController],
      providers: [NomineesService],
    }).compile();

    controller = module.get<NomineesController>(NomineesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
