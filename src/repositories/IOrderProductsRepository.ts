import ICreateOrderProductDTO from '../dtos/create/ICreateOrderProductDTO';
import OrderProduct from '../models/OrderProduct';

export default interface IOrderProdctsRepository {
  create(data: ICreateOrderProductDTO): Promise<OrderProduct>;
}
