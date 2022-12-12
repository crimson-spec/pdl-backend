import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Sector from './Sector';

@Entity('categories')
export default class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  sector_id: string;

  @Column()
  description: string;

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
