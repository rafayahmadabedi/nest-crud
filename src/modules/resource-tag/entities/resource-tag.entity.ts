import {
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  Column,
} from 'sequelize-typescript';
import { Resource } from '../../resources/entities/resource.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Table({
  tableName: 'ResourceTags',
})
export class ResourceTag extends Model<ResourceTag> {
  @ForeignKey(() => Resource)
  @Column
  resourceId: number;

  @BelongsTo(() => Resource)
  resource: Resource;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @BelongsTo(() => Tag, {
    foreignKey: 'tagId',
    onDelete: 'restrict', // Set the onDelete action to RESTRICT
  })
  tag: Tag;
}
