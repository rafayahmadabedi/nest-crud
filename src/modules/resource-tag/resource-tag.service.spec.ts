import { Test, TestingModule } from '@nestjs/testing';
import { ResourceTagService } from './resource-tag.service';

describe('ResourceTagService', () => {
  let service: ResourceTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceTagService],
    }).compile();

    service = module.get<ResourceTagService>(ResourceTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
