import { inject, injectable } from "tsyringe";
import Product from "@orders/infra/typeorm/entities/Product";

import IOrderRepository from "@orders/infra/typeorm/repositories/IOrderRepository";
import IOrderProductsRepository from "@orders/infra/typeorm/repositories/IOrderProductsRepository";
import IOrderPadRepository from "@orders/infra/typeorm/repositories/IOrderPadRepository";


interface IRequest{
  table_id: number;
  order_pad_id: number;
  obs: string;
  products: Product[]; 
}
@injectable()
export default class SendOrderService{
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
    @inject('OrderPadRepository')
    private orderPadRepository: IOrderPadRepository,
    @inject('OrderProductsRepository')
    private orderProductsRepository: IOrderProductsRepository
  ){}

  public async execute({table_id, order_pad_id, obs, products}: IRequest){
    // verificar se a comanda ja tem um mesa atribuida
    
    await this.orderPadRepository.update({
      id: order_pad_id,
      table_id
    });
    const order = await this.orderRepository.create({
      order_pad_id,
      obs
    });
    //order.id
    products.map(async product => {
      await this.orderProductsRepository.create({
        order_id: order.id,
        product_id: product.id
      })
    });
     //RETORNAR O PEDIDO COMPLETO COM A LISTA DE PRODUTOS CONTIDOS NO MESMO
    return await this.orderRepository.getFullOrderById(order.id);
  }
}
