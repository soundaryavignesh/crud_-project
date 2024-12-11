import { Test, TestingModule } from '@nestjs/testing';
import { UserloginController } from './userlogin.controller';
import { UserloginService } from './userlogin.service';

describe('UserloginController', () => {
  let controller: UserloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserloginController],
      providers: [UserloginService],
    }).compile();

    controller = module.get<UserloginController>(UserloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
