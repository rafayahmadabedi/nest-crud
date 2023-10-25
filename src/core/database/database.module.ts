import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'nisum123',
      database: 'BOOKSTORE',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  exports: [],
})
export class DatabaseModule {}
