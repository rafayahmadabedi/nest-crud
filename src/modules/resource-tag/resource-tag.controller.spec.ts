import { Test, TestingModule } from '@nestjs/testing';
import { ResourceTagController } from './resource-tag.controller';
import { ResourceTagService } from './resource-tag.service';

describe('ResourceTagController', () => {
  let controller: ResourceTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceTagController],
      providers: [ResourceTagService],
    }).compile();

    controller = module.get<ResourceTagController>(ResourceTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
