import { getRepository } from "typeorm";

import Product from "@shared/infra/typeorm/entities/Product";
import ICreateProductDTO from "@order/product/dtos/ICreateProductDTO";
import IProductRepository from "@order/product/infra/typeorm/repositories/implementations/ProductRepository";



export default class ProductRepository implements IProductRepository {

  private ormRepository = getRepository(Product);

  /**
   * CRUD de Products
   */

  async show(id: number): Promise<Product> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  async index(): Promise<Product[]> {
    const products = await this.ormRepository.find();

    return products;
  }

  async create({ category_id, name, value, status }: ICreateProductDTO): Promise<Product> {

    const product = this.ormRepository.create({
      category_id,
      name,
      value,
      status
    })
    return await this.ormRepository.save(product);
  }

  /**
   * search data
   */

  async findByName(name: string): Promise<Product | undefined> {
    return await this.ormRepository.findOne({
      where: { name }
    })
  }

  async findById(id: number): Promise<Product | undefined> {
    return await this.ormRepository.findOne(id);
  }
}
