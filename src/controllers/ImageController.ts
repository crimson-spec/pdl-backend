import { Request, Response } from 'express';
import fs from 'fs';
import { container } from 'tsyringe';
import GetProductImageService from '../services/others/GetProductImageService';

class ImageController {
  async product(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(GetProductImageService);
    const image = await service.execute(id);
    if (image) {
      return image.pipe(response);
    }
    return response.send();
  }
}

export default new ImageController();
