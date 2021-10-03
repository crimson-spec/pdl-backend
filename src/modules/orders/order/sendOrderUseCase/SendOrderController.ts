import { Request, Response } from "express";
import { container } from "tsyringe";
import SendOrderService from "@orders/order/sendOrderUseCase/SendOrderService";

export default class SendOrderController{
  async handle(request: Request, response: Response){
    const {table_id, order_pad_id, products, obs} = request.body;

    const sendOrderService = container.resolve(SendOrderService);

    const order = await sendOrderService.execute(
      {
        table_id,
        order_pad_id,
        products,
        obs
      }
    )
    return response.status(201).json(order);
    
  }
}
