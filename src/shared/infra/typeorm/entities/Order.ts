import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import OrderPad from "@order/order-pad/infra/typeorm/entities/OrderPad";

@Entity("orders")
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_pad_id: number;

  @Column()
  obs: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => OrderPad)
  order_pad: OrderPad;

  /* @ManyToMany(() => Product, (product) => product.orders)
  products: Product[]; */
}
