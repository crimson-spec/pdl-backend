import { getRepository, Repository } from "typeorm";
import OrderPad from "@orders/infra/typeorm/entities/OrderPad";
import IOrderPadRepository from "@orders/infra/typeorm/repositories/IOrderPadRepository";
import IUpdateOrderPadDTO from "@orders/order-pad/dtos/IUpdateOrderPadDTO";




export default class OrderPadRepository implements IOrderPadRepository{
  private ormRepository: Repository<OrderPad>;

  constructor(){
    this.ormRepository = getRepository(OrderPad);
  }

  async update({id, table_id, hash_code}: IUpdateOrderPadDTO): Promise<OrderPad> {
    return await this.ormRepository.save({
      id,
      table_id,
      hash_code
    });
  }
}
