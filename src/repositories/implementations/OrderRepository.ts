import { getRepository, Repository } from 'typeorm';
import ICreateOrderDTO from '../../dtos/create/ICreateOrderDTO';
import Order from '../../models/Order';
import IOrderRepository from '../IOrderRepository';

export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }
  findById(id: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }

  async index(): Promise<Order[]> {
    return await this.ormRepository.find({
      relations: ['order_products', 'order_products.product'],
    });
  }

  async create({ order_pad_id, observation }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      order_pad_id,
      observation,
    });
    return await this.ormRepository.save(order);
  }

  async getFullOrderById(id: string): Promise<Order> {
    return await this.ormRepository.findOne({
      relations: ['order_pad', 'order_pad.table', 'products'],
      where: { id },
    });
  }
}
