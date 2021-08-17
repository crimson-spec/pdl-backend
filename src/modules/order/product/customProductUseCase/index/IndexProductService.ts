import AppError from "../../../../shared/middlewares/errors";


export default class IndexProductService {
  async execute() {
    const productRepository = new ProductRepository();

    const indexProducts = await productRepository.index();

    if (!indexProducts)
      throw new AppError("Erro ao listar todos os produtos")

    return indexProducts;
  }
}
