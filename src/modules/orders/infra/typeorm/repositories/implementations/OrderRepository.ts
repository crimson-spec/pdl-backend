import { getRepository, Repository } from "typeorm";
import Order from "@orders/infra/typeorm/entities/Order";
import IOrderRepository from "@orders/infra/typeorm/repositories/IOrderRepository";
import ICreateOrderDTO from "@orders/order/dtos/ICreateOrderDTO";




export default class OrderRepository implements IOrderRepository{
  private ormRepository: Repository<Order>;

  constructor(){
    this.ormRepository = getRepository(Order);
  }

  async create({order_pad_id, obs}: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      order_pad_id,
      obs
    });
    return await this.ormRepository.save(order);
  }

  async getFullOrderById(id: number): Promise<Order> {
    return await this.ormRepository.findOne({
      relations:['order_pad', 'order_pad.table', 'products'],
      where: {id}
    })
  }
}
