import { Injectable } from '@nestjs/common';
import { CreateKpiDto } from './dto/create-kpi.dto';
import { UpdateKpiDto } from './dto/update-kpi.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Kpi } from './entities/kpi.entity';

@Injectable()
export class KpisService {
  constructor(@InjectModel(Kpi) private readonly kpiModel: typeof Kpi) {}

  async create(createKpiDto: CreateKpiDto): Promise<Kpi> {
    return await this.kpiModel.create(createKpiDto);
    // return 'This action adds a new kpi';
  }

  async findAll(): Promise<Kpi[]> {
    return this.kpiModel.findAll();
    // return `This action returns all kpis`;
  }

  async findOne(id: number): Promise<Kpi | null> {
    return this.kpiModel.findByPk(id);
    // return `This action returns a #${id} kpi`;
  }

  async update(id: number, updateKpiDto: UpdateKpiDto): Promise<[number]> {
    return this.kpiModel.update(updateKpiDto, { where: { id } });
    // return `This action updates a #${id} kpi`;
  }

  async remove(id: number): Promise<number> {
    const result = await this.kpiModel.destroy({ where: { id } });
    return result;
    // return `This action removes a #${id} kpi`;
  }
}
