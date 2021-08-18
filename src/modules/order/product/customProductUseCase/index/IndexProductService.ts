import IProductRepository from "@order/product/infra/typeorm/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/infra/http/middlewares/errors";

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
