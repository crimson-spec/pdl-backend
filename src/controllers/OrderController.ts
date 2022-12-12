import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '../services/create/CreateOrderService';

class OrderController {
  public async create(request: Request, response: Response) {
    const { order_pad_id } = request;
    const { products, observation } = request.body;
    const service = container.resolve(CreateOrderService);
    const order = await service.execute({
      order_pad_id,
      products,
      observation,
    });
    return response.status(200).json(order);
  }
}

export default new OrderController();
