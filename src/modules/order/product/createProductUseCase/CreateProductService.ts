import AppError from "@shared/infra/http/middlewares/errors";
import { injectable, inject } from "tsyringe";
import IProductRepository from "@order/product/infra/typeorm/repositories/implementations/ProductRepository";


interface IRequest {
  category_id: number;
  name: string;
  value: number;
  status?: boolean;
}

@injectable()
export default class CreateProductService {

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) { }

  async execute({ category_id, name, value, status }: IRequest) {

    const productExists = await this.productRepository.findByName(name)

    if (productExists)
      throw new AppError("Produto já existe")

    const productCreated = await this.productRepository.create({
      category_id,
      name,
      value,
      status
    })

    if (!productCreated)
      throw new AppError("Erro ao cadastrar produto")

    return productCreated;
  }
}
