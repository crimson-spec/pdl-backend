import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import OrderPad from "./OrderPad";

@Entity("tables")
export default class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  internal_number: number;

  @Column()
  hash_code: string;

  @Column()
  is_blocked: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => OrderPad, (orderPad) => orderPad.table)
  order_pads: OrderPad[];
}
