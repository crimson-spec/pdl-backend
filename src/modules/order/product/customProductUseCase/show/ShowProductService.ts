import AppError from "@shared/infra/http/middlewares/errors";
import { inject } from "tsyringe";
import IProductRepository from "@order/product/infra/typeorm/repositories/IProductRepository";



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
