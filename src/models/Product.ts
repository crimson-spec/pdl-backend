import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Category from './Category';

@Entity('products')
export default class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  category_id: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  quantity: number;

  @Column()
  status: boolean;

  @Column()
  image_filename: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Category)
  category: Category;

  // @ManyToMany(() => Order)
  // @JoinTable({
  //   name: 'orders_products',
  //   joinColumn: {
  //     name: 'product_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'order_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // orders: Order[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
