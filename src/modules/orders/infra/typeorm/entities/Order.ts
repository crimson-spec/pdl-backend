import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import OrderPad from "@orders/infra/typeorm/entities/OrderPad";
import Product from "@orders/infra/typeorm/entities/Product";

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

  @ManyToMany(() => Product)
  @JoinTable({
    name: "orders_products",
    joinColumn: {
      name: "order_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "product_id",
      referencedColumnName: "id"
    }
  })
  products: Product[];
}
