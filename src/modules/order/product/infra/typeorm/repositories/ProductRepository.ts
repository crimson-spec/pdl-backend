import { getRepository } from "typeorm";

import Product from "../../../shared/entities/Product";
import ICreateProductDTO from "../interfaces/ICreateProductDTO";
import IProductRepository from "../interfaces/IProductRepository";



export default class ProductRepository implements IProductRepository {

  private ormRepository = getRepository(Product);

  show(id: number): Promise<Product> {
    const product = this.ormRepository.findOne(id);

    return product;
  }

  index(): Promise<Product[]> {
    const products = this.ormRepository.find();

    return products;
  }

  create({ category_id, name, value, status }: ICreateProductDTO): Promise<Product> {

    const product = this.ormRepository.create({
      category_id,
      name,
      value,
      status
    })
    return this.ormRepository.save(product);
  }

  findByName(name: string): Promise<Product | undefined> {
    return this.ormRepository.findOne({
      where: { name }
    })
  }

  findById(id: number): Promise<Product> {
    return this.ormRepository.findOne(id);
  }

}
