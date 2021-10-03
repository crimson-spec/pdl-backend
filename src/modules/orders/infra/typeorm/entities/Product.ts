import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import Order from "@orders/infra/typeorm/entities/Order";
import Category from "@orders/infra/typeorm/entities/Category";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Category)
  Category: Category;

  @ManyToMany(() => Order)
  @JoinTable({
    name: "orders_products",
    joinColumn: {
      name: "product_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "order_id",
      referencedColumnName: "id"
    }
  })
  orders: Order[];
}
