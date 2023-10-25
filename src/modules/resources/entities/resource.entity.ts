import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  AllowNull,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { ResourceTag } from '../../resource-tag/entities/resource-tag.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Table
export class Resource extends Model<Resource> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  createdBy: string;

  @BelongsToMany(() => Tag, () => ResourceTag)
  tags: Tag[];

  @HasMany(() => ResourceTag, {
    foreignKey: 'resourceId',
    onDelete: 'RESTRICT',
  })
  resourceTags: ResourceTag[];
}
