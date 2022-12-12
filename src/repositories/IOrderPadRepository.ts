import ICreateOrderPadDTO from '../dtos/create/ICreateOrderPadDTO';
import OrderPad from '../models/OrderPad';

export default interface IOrderPadRepository {
  create(data: ICreateOrderPadDTO): Promise<OrderPad>;
  // findById(id: number): Promise<OrderPad>;
}
