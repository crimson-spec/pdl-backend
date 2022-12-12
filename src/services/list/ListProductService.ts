import { inject, injectable } from 'tsyringe';
import IProductRepository from '../../repositories/IProductRepository';

@injectable()
export default class ListProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute() {
    const indexProducts = await this.productRepository.index();
    if (!indexProducts) throw new Error('Erro ao listar produtos.');

    return indexProducts;
  }
}
