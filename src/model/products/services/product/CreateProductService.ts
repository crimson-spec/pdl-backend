import ProductRepository from "../../repositories/ProductRepository"

interface IRequest {
  category_id: number;
  name: string;
  value: number;
  status: boolean;
}

export default class CreateProductService {
  async execute({ category_id, name, value, status }: IRequest) {
    const productRepository = new ProductRepository();

    const productExists = await productRepository.findByName(name)

    if (productExists)
      throw new Error("Produto já existe")

    const productCreated = await productRepository.create({
      category_id,
      name,
      value,
      status
    })

    if (!productCreated)
      throw new Error("Erro ao cadastrar produto")

    return productCreated;
  }
}
