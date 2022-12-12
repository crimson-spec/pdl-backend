import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderPadService from '../services/create/CreateOrderPadService';

class OrderPadController {
  async create(request: Request, response: Response) {
    const { table_id, contact } = request.body;
    const ipv4 = request.ip;
    const service = container.resolve(CreateOrderPadService);
    const token = await service.execute({ table_id, contact, ipv4 });
    return response.status(201).send(token);
  }
}

export default new OrderPadController();
