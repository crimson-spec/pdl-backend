import OrderProduct from "@orders/order/infra/typeorm/entities/OrderProduct";
import ICreateOrderProductsDTO from "@orders/order/dtos/ICreateOrderProductsDTO";


export default interface IOrderProdctsRepository{
  create({order_id, product_id}: ICreateOrderProductsDTO): Promise<OrderProduct>;
}
