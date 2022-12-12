import { inject, injectable } from 'tsyringe';
import IProductRepository from '../../repositories/IProductRepository';
import { NotFoundError } from '../../shared/classes/ApiError';
import fs from 'fs';
import path from 'path';

@injectable()
export default class GetProductImageService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(product_id: string) {
    const product = await this.productRepository.findById(product_id);
    if (!product) throw new NotFoundError('Produto não encontrado.');
    if (product.image_filename) {
      const image_path = path.resolve(
        __dirname,
        '..',
        '..',
        'uploads',
        'products',
        product.image_filename
      );
      if (fs.existsSync(image_path)) return fs.createReadStream(image_path);
    }

    return null;
  }
}
