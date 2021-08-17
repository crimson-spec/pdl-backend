import AppError from "../../../../../shared/middlewares/errors";



export default class ShowProductService {
  async execute(id: number) {
    const productRepository = new ProductRepository();

    const productExists = await productRepository.findById(id);

    if (!productExists)
      throw new AppError("Produto não encontrado")

    return productExists;
  }
}
