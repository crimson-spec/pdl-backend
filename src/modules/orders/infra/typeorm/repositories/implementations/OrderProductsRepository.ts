import { getRepository, Repository } from "typeorm";

import ICreateOrderProductsDTO from "@orders/order/dtos/ICreateOrderProductsDTO";
import OrderProduct from "@orders/infra/typeorm/entities/OrderProduct";
import IOrderProductsRepository from "@orders/infra/typeorm/repositories/IOrderProductsRepository";


export default class OrderProductsRepository implements IOrderProductsRepository{
  private ormRepository: Repository<OrderProduct>;

  constructor(){
    this.ormRepository = getRepository(OrderProduct);
  }

  async create({order_id, product_id}: ICreateOrderProductsDTO): Promise<OrderProduct> {
    const orderProduct = this.ormRepository.create({
      order_id,
      product_id
    });
    return await this.ormRepository.save(orderProduct);
  }
}
