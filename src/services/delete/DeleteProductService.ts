import { inject, injectable } from 'tsyringe';
import IProductRepository from '../../repositories/IProductRepository';
import { NotFoundError } from '../../shared/classes/ApiError';

@injectable()
export default class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(id: string) {
    const deleted = await this.productRepository.delete(id);
    if (!deleted) throw new NotFoundError('Produto não existe.');
  }
}
