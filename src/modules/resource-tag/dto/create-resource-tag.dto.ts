import { IsInt } from 'class-validator';

export class CreateResourceTagDto {
  @IsInt()
  resourceId: number;

  @IsInt()
  tagId: number;
}
