import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/entities/employee.entity';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: 'postgres://fmvdajow:q4iwQxU5xQWqpNpuxq6Mb8NibkNThP0u@ziggy.db.elephantsql.com/fmvdajow',
      entities: [Employee],
      synchronize: true,
      logging: true,
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
