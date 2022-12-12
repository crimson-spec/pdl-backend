import { injectable, inject } from 'tsyringe';
import IProductRepository from '../../repositories/IProductRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  id: string;
  description?: string;
  category_id?: string;
  value?: number;
  status?: boolean;
  quantity?: number;
  image_filename?: string;
}

@injectable()
export default class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute({
    id,
    description,
    category_id,
    value,
    status,
    quantity,
    image_filename,
  }: IRequest) {
    const productExists = await this.productRepository.findById(id);
    if (!productExists) throw new BadRequestError('Produto não existe.');

    const product = await this.productRepository.update({
      id,
      description,
      category_id,
      value,
      status,
      quantity,
      image_filename,
    });
    if (!product) throw new Error('Erro ao atualizar produto.');
    return product;
  }
}
