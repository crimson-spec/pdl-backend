import ICreateOrderDTO from '../dtos/create/ICreateOrderDTO';
import Order from '../models/Order';

export default interface IOrderRepository {
  index(): Promise<Order[]>;
  create(data: ICreateOrderDTO): Promise<Order>;
  findById(id: string): Promise<Order>;
  getFullOrderById(id: string): Promise<Order>;
}
