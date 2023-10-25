import { Module } from '@nestjs/common';
import { KpisService } from './kpis.service';
import { KpisController } from './kpis.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Kpi } from './entities/kpi.entity';

@Module({
  imports: [SequelizeModule.forFeature([Kpi])],
  controllers: [KpisController],
  providers: [KpisService],
})
export class KpisModule {}
