import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import OrderPad from "@orders/infra/typeorm/entities/OrderPad";

@Entity("tables")
export default class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  internal_number: number;

  @Column()
  hash_code: string;

  @Column()
  in_use: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  
  @OneToMany(() => OrderPad, (orderPad) => orderPad.table)
  order_pads: OrderPad[];
}
