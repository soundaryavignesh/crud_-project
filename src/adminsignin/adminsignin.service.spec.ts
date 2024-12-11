import { Test, TestingModule } from '@nestjs/testing';
import { AdminsigninService } from './adminsignin.service';

describe('AdminsigninService', () => {
  let service: AdminsigninService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsigninService],
    }).compile();

    service = module.get<AdminsigninService>(AdminsigninService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
