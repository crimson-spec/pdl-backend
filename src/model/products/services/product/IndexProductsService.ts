import ProductRepository from "../../repositories/ProductRepository"




export default class IndexProductService {
  async execute() {
    const productRepository = new ProductRepository();

    const indexProducts = await productRepository.index();

    if (!indexProducts)
      throw new Error("Erro ao listar todos os produtos")

    return indexProducts;
  }

}
