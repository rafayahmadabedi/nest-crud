import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceTagDto } from './create-resource-tag.dto';

export class UpdateResourceTagDto extends PartialType(CreateResourceTagDto) {}
