import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Sector from './Sector';

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sector_id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne((type) => Sector)
  @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
  sector: Sector;
  /* 
    @OneToMany(() => Product, (product) => product.category)
    products: Product[]; */
}
