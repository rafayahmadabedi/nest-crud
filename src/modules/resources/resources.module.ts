import { Module } from '@nestjs/common';
import { ResourceService } from './resources.service';
import { ResourcesController } from './resources.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Resource } from './entities/resource.entity';
import { ResourceTag } from '../resource-tag/entities/resource-tag.entity';
import { Tag } from '../tag/entities/tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([Resource, Tag, ResourceTag])],
  controllers: [ResourcesController],
  providers: [ResourceService],
})
export class ResourcesModule {}
