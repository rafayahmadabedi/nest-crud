import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { ResourceTag } from '../../resource-tag/entities/resource-tag.entity';
import { Resource } from '../../resources/entities/resource.entity';

@Table
export class Tag extends Model<Tag> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  description: string;

  @BelongsToMany(() => Resource, () => ResourceTag)
  resources: Resource[];

  @HasMany(() => ResourceTag, {
    foreignKey: 'tagId',
  })
  resourceTags: ResourceTag[];
}
