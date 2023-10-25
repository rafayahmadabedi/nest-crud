import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table
export class Kpi extends Model<Kpi> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  _id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.INTEGER)
  totalWeightage: number;
}
