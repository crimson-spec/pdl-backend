import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('employees')
export default class User {
  @PrimaryColumn()
  user_id: number;

  @Column()
  is_blocked: boolean;
}
