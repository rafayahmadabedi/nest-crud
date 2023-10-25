import { Injectable } from '@nestjs/common';
import { CreateResourceTagDto } from './dto/create-resource-tag.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ResourceTag } from './entities/resource-tag.entity';

@Injectable()
export class ResourceTagService {
  constructor(
    @InjectModel(ResourceTag)
    private readonly resourceTagModel: typeof ResourceTag,
  ) {}

  async create(
    createResourceTagDto: CreateResourceTagDto,
  ): Promise<ResourceTag> {
    return this.resourceTagModel.create(createResourceTagDto);
  }

  async findAll(): Promise<ResourceTag[]> {
    return this.resourceTagModel.findAll();
  }

  async findAllByResourceId(resourceId: number): Promise<ResourceTag[]> {
    const resourceTags = await this.resourceTagModel.findAll({
      where: {
        resourceId,
      },
    });
    return resourceTags;
  }

  async findAllByTagId(tagId: number): Promise<ResourceTag[]> {
    const tagResources = await this.resourceTagModel.findAll({
      where: {
        tagId,
      },
    });
    return tagResources;
  }

  async remove(tagId: number, resourceId: number): Promise<number> {
    const result = await this.resourceTagModel.destroy({
      where: {
        tagId,
        resourceId,
      },
    });
    return result;
  }
}
