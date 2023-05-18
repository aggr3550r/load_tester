import { Test, TestingModule } from '@nestjs/testing';
import { TargetServerService } from './target-server.service';

describe('TargetServerService', () => {
  let service: TargetServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TargetServerService],
    }).compile();

    service = module.get<TargetServerService>(TargetServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
