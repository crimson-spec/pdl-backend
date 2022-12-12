import { Request, Response } from 'express';
import { container } from 'tsyringe';

class OrderController {
  public async create(request: Request, response: Response) {
    // const { table_id, order_pad_id, products, obs } = request.body;
    // const service = container.resolve(service);
    // const order = await sendOrderService.execute({
    //   table_id,
    //   order_pad_id,
    //   products,
    //   obs,
    // });
    // return response.status(201).json(order);
  }
}

export default new OrderController();
