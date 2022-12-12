import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderPadService from '../services/create/CreateOrderPadService';

class OrderPadController {
  async create(request: Request, response: Response) {
    const { contact } = request.body;
    const ipv4 = request.ip;
    console.log({ contact, ipv4 });
    const service = container.resolve(CreateOrderPadService);
    // const orderPad = service.execute()
  }
}

export default new OrderPadController();
