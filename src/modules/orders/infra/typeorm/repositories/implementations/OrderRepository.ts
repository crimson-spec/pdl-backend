import { getRepository, Repository } from "typeorm";
import Order from "@orders/infra/typeorm/entities/Order";
import IOrderRepository from "@orders/infra/typeorm/repositories/IOrderRepository";
import ICreateOrderDTO from "@orders/order/dtos/ICreateOrderDTO";
import OrderPad from "../../entities/OrderPad";




export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }
  findById(id: number): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  async create({ order_pad_id, obs }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      order_pad_id,
      obs
    });
    return await this.ormRepository.save(order);
  }

  async getFullOrderById(id: number): Promise<Order> {
    return await this.ormRepository.findOne({
      relations: ['order_pad', 'order_pad.table', 'products'],
      where: { id }
    })
  }
}
