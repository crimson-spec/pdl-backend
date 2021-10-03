import { inject, injectable } from "tsyringe";
import AppError from "@shared/infra/http/middlewares/errors";
import IProductRepository from "@orders/infra/typeorm/repositories/IProductRepository";

@injectable()
export default class IndexProductService {

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) { }
  async execute() {

    const indexProducts = await this.productRepository.index();

    if (!indexProducts)
      throw new AppError("Erro ao listar todos os produtos")

    return indexProducts;
  }
}
