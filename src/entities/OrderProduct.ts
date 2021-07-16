import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn, ManyToMany } from "typeorm";


@Entity("orders_products")
export default class OrderProduct {
  @PrimaryColumn()
  order_id: number;

  @PrimaryColumn()
  product_id: number;
}
