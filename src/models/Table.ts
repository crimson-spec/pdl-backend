import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('tables')
export default class Table {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany(() => OrderPad, (orderPad) => orderPad.table)
  // order_pads: OrderPad[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
