import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Admin from './Admin';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Admin, (admin) => admin.user_id)
  admin: Admin;

  //   @UpdateDateColumn()
  //   updated_at: Date;
  /* 
    @OneToMany(() => Product, (product) => product.category)
    products: Product[]; */
}
