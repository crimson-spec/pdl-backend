import { getRepository, Repository } from 'typeorm';
import ICreateOrderProductDTO from '../../dtos/create/ICreateOrderProductDTO';
import OrderProduct from '../../models/OrderProduct';
import IOrderProductsRepository from '../IOrderProductsRepository';

export default class OrderProductsRepository
  implements IOrderProductsRepository
{
  private ormRepository: Repository<OrderProduct>;

  constructor() {
    this.ormRepository = getRepository(OrderProduct);
  }

  async create({
    order_id,
    product_id,
    quantity,
    observation,
  }: ICreateOrderProductDTO): Promise<OrderProduct> {
    const orderProduct = this.ormRepository.create({
      order_id,
      product_id,
      quantity,
      observation,
    });
    return await this.ormRepository.save(orderProduct);
  }
}
