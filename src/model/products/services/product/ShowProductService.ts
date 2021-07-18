import ProductRepository from "../../repositories/ProductRepository"



export default class ShowProductService {

  async execute(id: number) {
    const productRepository = new ProductRepository();

    const productExists = await productRepository.findById(id);

    if (!productExists)
      throw new Error("Produto não encontrado")

    return productExists;
  }
}
