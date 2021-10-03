import { inject, injectable } from "tsyringe";
import AppError from "@shared/infra/http/middlewares/errors";
import IProductRepository from "@orders/infra/typeorm/repositories/IProductRepository";


@injectable()
export default class ShowProductService {

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) { }

  async execute(id: number) {

    const productExists = await this.productRepository.findById(id);

    if (!productExists)
      throw new AppError("Produto não encontrado")

    return productExists;
  }
}
