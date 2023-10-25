import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto, UpdateTagDto } from './dto';
import { Tag } from './entities/tag.entity';
import { Resource } from '../resources/entities/resource.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag) private readonly tagModel: typeof Tag) {}

  async create(tagData: CreateTagDto): Promise<Tag> {
    return this.tagModel.create(tagData);
  }

  async findAll(): Promise<Tag[]> {
    return this.tagModel.findAll();
  }

  async findAllWithResources(): Promise<Tag[]> {
    return this.tagModel.findAll({
      include: Resource,
    });
  }

  async findOne(id: number): Promise<Tag> {
    const tag = await this.tagModel.findByPk(id);
    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    return tag;
  }

  async findOneWithResources(id: number): Promise<Tag | null> {
    const tag = await this.tagModel.findByPk(id, {
      include: Resource,
    });

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    return tag;
  }

  async update(id: number, tagData: UpdateTagDto): Promise<UpdateTagDto> {
    const tag = await this.findOne(id);
    const updatedTag = await tag.update(tagData);

    return updatedTag.dataValues;
  }

  async remove(id: number): Promise<boolean> {
    const tag = await this.findOne(id);
    await tag.destroy();
    return true;
  }
}
