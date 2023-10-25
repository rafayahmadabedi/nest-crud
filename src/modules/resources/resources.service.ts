import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Resource } from './entities/resource.entity';
import { Tag } from '../tag/entities/tag.entity';
import { CreateResourceDto, UpdateResourceDto } from './dto';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource)
    private readonly resourceModel: typeof Resource,
  ) {}

  async findAll(): Promise<Resource[]> {
    return this.resourceModel.findAll();
  }

  async findAllResourcesWithTags(): Promise<Resource[]> {
    return Resource.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Tag,
          attributes: ['id', 'name'],
          through: { attributes: [] }, // Exclude intermediate table attributes
        },
      ],
    });
  }

  async create(createResourceDto: CreateResourceDto): Promise<Resource> {
    return this.resourceModel.create(createResourceDto);
  }
  async findOne(id: number): Promise<Resource | null> {
    return this.resourceModel.findByPk(id);
  }
  // Tod
  async findByIdwithTag(id: string): Promise<Resource | null> {
    return this.resourceModel.findByPk(id);
  }

  async update(
    id: number,
    updateResourceDto: UpdateResourceDto,
  ): Promise<Resource | undefined> {
    const resource = await this.resourceModel.findByPk(id);
    if (!resource) {
      return undefined;
    }
    return resource.update(updateResourceDto);
  }

  async remove(id: number): Promise<void> {
    const resource = await this.resourceModel.findByPk(id);
    if (resource) {
      await resource.destroy();
    }
  }
}
