import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import Order from "./Order";
import Table from "./Table"

@Entity("order_pad")
export default class OrderPad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  table_id: number;

  @Column()
  hash_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Table)
  table: Table;

  @OneToMany(() => Order, (order) => order.order_pad)
  orders: Order[];
}
