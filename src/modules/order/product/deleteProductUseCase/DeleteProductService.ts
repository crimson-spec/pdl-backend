import AppError from "@shared/infra/http/middlewares/errors";
import { inject, injectable } from "tsyringe";
import IProductRepository from "@order/product/infra/typeorm/repositories/IProductRepository";

@injectable()
export default class DeleteProductService {

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) { }

  async execute(id: number) {

    const productExists = await this.productRepository.findById(id);

    if (!productExists)
      throw new AppError("Produto não existe!");

    const productDeleted = await this.productRepository.delete(id);

    if (!productDeleted)
      throw new AppError("Falha ao deletar Produto!")

    return productDeleted;
  }
}
