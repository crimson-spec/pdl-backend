import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('admins')
export default class Admin {
  @PrimaryColumn()
  user_id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
