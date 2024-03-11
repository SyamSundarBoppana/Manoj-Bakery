import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/entities/employee.entity';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      url:"postgresql://postgres:zaUeFpsNwxztGBlHFgmeVbWeXPsfQrAl@viaduct.proxy.rlwy.net:27040/railway",
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
