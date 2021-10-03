import Order from "@orders/infra/typeorm/entities/Order";
import ICreateOrderDTO from "@orders/order/dtos/ICreateOrderDTO";


export default interface IOrderRepository{
  create({order_pad_id, obs}: ICreateOrderDTO): Promise<Order>;
  getFullOrderById(id: number): Promise<Order>;
}
