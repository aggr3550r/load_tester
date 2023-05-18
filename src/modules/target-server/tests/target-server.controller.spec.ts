import { Test, TestingModule } from '@nestjs/testing';
import { TargetServerController } from './target-server.controller';

describe('TargetServerController', () => {
  let controller: TargetServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TargetServerController],
    }).compile();

    controller = module.get<TargetServerController>(TargetServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
