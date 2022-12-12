import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('order_pad')
export default class OrderPad {
  @PrimaryColumn()
  id: string;

  @Column()
  table_id: string;

  @Column()
  is_open: boolean;

  @Column()
  contact: string;

  @Column()
  ipv4: string;

  @Column()
  write_off_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToOne(() => Table)
  // table: Table;

  // @OneToMany(() => Order, (order) => order.order_pad)
  // orders: Order[];
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
