import { injectable, inject } from 'tsyringe';
import IProductRepository from '../../repositories/IProductRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  description: string;
  category_id: string;
  value: number;
  status: boolean;
  quantity: number;
  measurement: string;
  image_filename?: string;
}

@injectable()
export default class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute({
    description,
    category_id,
    value,
    status,
    quantity,
    measurement,
    image_filename,
  }: IRequest) {
    const productExists = await this.productRepository.findByDescription(
      description
    );
    if (productExists) throw new BadRequestError('Produto já existe.');

    const product = await this.productRepository.create({
      description,
      category_id,
      value,
      quantity,
      measurement,
      status,
      image_filename,
    });
    if (!product) throw new Error('Erro ao cadastrar produto.');
    return product;
  }
}
