import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListOrderService from '../services/list/ListOrderService';

class ReportController {
  public async orders(request: Request, response: Response) {
    const service = container.resolve(ListOrderService);
    const orders = await service.execute();
    return response.status(200).json(orders);
  }
}

export default new ReportController();
