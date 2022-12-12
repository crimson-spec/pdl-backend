import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
