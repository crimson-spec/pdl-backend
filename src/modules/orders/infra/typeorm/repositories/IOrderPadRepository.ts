import OrderPad from "@orders/infra/typeorm/entities/OrderPad";
import IUpdateOrderPadDTO from "@orders/order-pad/dtos/IUpdateOrderPadDTO";


export default interface IOrderPadRepository{
  update({id, table_id, hash_code}: IUpdateOrderPadDTO): Promise<OrderPad>;
}
