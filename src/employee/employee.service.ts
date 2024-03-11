import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee: Employee = new Employee();
    employee.employeeName = createEmployeeDto.employeeName;
    employee.location = createEmployeeDto.location;
    employee.employeeId = createEmployeeDto.employeeId;
    return this.employeeRepository.save(employee);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number):Promise<Employee> {
    return this.employeeRepository.findOneBy({ id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee: Employee = new Employee();
    employee.employeeName = updateEmployeeDto.employeeName;
    employee.location = updateEmployeeDto.location;
    employee.employeeId = updateEmployeeDto.employeeId;
    employee.id = id;
    return this.employeeRepository.save(employee);
  }

  remove(id: number) {
    return this.employeeRepository.delete(id);
  }
}
