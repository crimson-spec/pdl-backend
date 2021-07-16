import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import Category from "./Category";
import Order from "./Order";

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
  category: Category;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
