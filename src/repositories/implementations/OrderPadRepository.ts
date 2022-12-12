import { getRepository, Repository } from 'typeorm';
import ICreateOrderPadDTO from '../../dtos/create/ICreateOrderPadDTO';
import OrderPad from '../../models/OrderPad';
import IOrderPadRepository from '../IOrderPadRepository';

export default class OrderPadRepository implements IOrderPadRepository {
  private ormRepository: Repository<OrderPad>;

  constructor() {
    this.ormRepository = getRepository(OrderPad);
  }

  async create({
    table_id,
    contact,
    ipv4,
  }: ICreateOrderPadDTO): Promise<OrderPad> {
    const orderPad = this.ormRepository.create({
      table_id,
      contact,
      ipv4,
    });
    return await this.ormRepository.save(orderPad);
  }

  async findById(id: string): Promise<OrderPad> {
    return await this.ormRepository.findOne(id);
  }
}
