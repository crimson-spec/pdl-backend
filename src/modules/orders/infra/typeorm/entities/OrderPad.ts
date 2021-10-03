import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import Order from "@orders/infra/typeorm/entities/Order";
import Table from "@orders/infra/typeorm/entities/Table";

@Entity("order_pad")
export default class OrderPad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  table_id: number;

  @Column()
  hash_code: string;

  @Column()
  in_use: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Table)
  table: Table;

  @OneToMany(() => Order, (order) => order.order_pad)
  orders: Order[];
}
