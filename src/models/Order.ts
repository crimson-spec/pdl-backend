import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
// import OrderPad from './OrderPad';
// import Product from './Product';

@Entity('orders')
export default class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  order_pad_id: string;

  @Column()
  internal_number: number;

  @Column()
  observation: string;

  @Column()
  cancelled: boolean;

  @CreateDateColumn()
  created_at: Date;

  // @ManyToOne(() => OrderPad)
  // order_pad: OrderPad;

  // @ManyToMany(() => Product)
  // @JoinTable({
  //   name: 'orders_products',
  //   joinColumn: {
  //     name: 'order_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'product_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
