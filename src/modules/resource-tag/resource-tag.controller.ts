import { Controller, Get, Post, Body } from '@nestjs/common';
import { ResourceTagService } from './resource-tag.service';
import { CreateResourceTagDto } from './dto/create-resource-tag.dto';

@Controller('resource-tag')
export class ResourceTagController {
  constructor(private readonly resourceTagService: ResourceTagService) {}

  @Post()
  create(@Body() createResourceTagDto: CreateResourceTagDto) {
    return this.resourceTagService.create(createResourceTagDto);
  }

  @Get()
  findAll() {
    return this.resourceTagService.findAll();
  }
}
