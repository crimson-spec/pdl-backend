import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import Order from './Order';
import Product from './Product';

@Entity('order_products')
export default class OrderProduct {
  @PrimaryColumn()
  order_id: string;

  @PrimaryColumn()
  product_id: string;

  @Column()
  quantity: number;

  @Column()
  observation: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => Product)
  product: Order;
}
