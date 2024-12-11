import { Test, TestingModule } from '@nestjs/testing';
import { AdminsigninController } from './adminsignin.controller';
import { AdminsigninService } from './adminsignin.service';

describe('AdminsigninController', () => {
  let controller: AdminsigninController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminsigninController],
      providers: [AdminsigninService],
    }).compile();

    controller = module.get<AdminsigninController>(AdminsigninController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
