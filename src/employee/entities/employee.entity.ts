import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeName: string;

  @Column()
  location: string;

  @Column()
  employeeId: string;
}
