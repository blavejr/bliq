import { Test, TestingModule } from '@nestjs/testing';
import { BoltService } from './bolt.service';
import { BliqUtils } from '../utils/bliq';

describe('BoltService', () => {
  let service: BoltService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoltService, BliqUtils],
    }).compile();

    service = module.get<BoltService>(BoltService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
