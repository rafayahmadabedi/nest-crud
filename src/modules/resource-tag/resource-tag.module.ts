import { Module } from '@nestjs/common';
import { ResourceTagService } from './resource-tag.service';
import { ResourceTagController } from './resource-tag.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResourceTag } from './entities/resource-tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([ResourceTag])],
  controllers: [ResourceTagController],
  providers: [ResourceTagService],
})
export class ResourceTagModule {}
