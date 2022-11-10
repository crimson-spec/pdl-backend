import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSectorService from './CreateSectorService';

export default class CreateSectorController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const service = container.resolve(CreateSectorService);
    const sector = await service.execute({ name });
    return response.status(200).json(sector);
  }
}
