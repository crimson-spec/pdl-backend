import { DeleteResult, getRepository, Repository } from "typeorm";

import ICreateProductDTO from "@orders/product/dtos/ICreateProductDTO";
import IUpdateProductDTO from "@orders/product/dtos/IUpdateProductDTO";
import Product from "@orders/infra/typeorm/entities/Product";
import IProductRepository from "@orders/infra/typeorm/repositories/IProductRepository";



export default class ProductRepository implements IProductRepository {

  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

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
  
  update({ category_id, name, value, status }: IUpdateProductDTO): Promise<Product> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.ormRepository.delete(id)
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
