import { inject, injectable } from 'tsyringe';
import IProductRepository from '../../repositories/IProductRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

@injectable()
export default class ShowProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(id: string) {
    const product = await this.productRepository.show(id);
    if (!product) throw new BadRequestError('Produto não encontrado.');

    return product;
  }
}
