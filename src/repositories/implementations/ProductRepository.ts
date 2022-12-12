import { DeleteResult, getRepository, Repository } from 'typeorm';
import ICreateProductDTO from '../../dtos/create/ICreateProductDTO';
import IUpdateProductDTO from '../../dtos/update/IUpdateProductDTO';
import Product from '../../models/Product';
import IProductRepository from '../IProductRepository';

export default class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  /**
   * CRUD de Products
   */

  async show(id: string): Promise<Product> {
    return await this.ormRepository.findOne(id);
  }

  async index(): Promise<Product[]> {
    const products = await this.ormRepository.find({
      relations: ['category'],
    });

    return products;
  }

  async create({
    category_id,
    description,
    value,
    status,
    quantity,
    image_filename,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      category_id,
      description,
      value,
      status,
      quantity,
      image_filename,
    });
    return await this.ormRepository.save(product);
  }

  async update({
    id,
    category_id,
    description,
    value,
    status,
    quantity,
    image_filename,
  }: IUpdateProductDTO): Promise<Product> {
    return await this.ormRepository.save({
      id,
      category_id,
      description,
      value,
      status,
      quantity,
      image_filename,
    });
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.ormRepository
      .createQueryBuilder('products')
      .delete()
      .from(Product)
      .where('id = :id', { id })
      .execute();

    return deleted.affected > 0;
  }

  /**
   * search data
   */

  async findByDescription(description: string): Promise<Product | undefined> {
    return await this.ormRepository
      .createQueryBuilder('products')
      .where('LOWER(description) = LOWER(:description)', { description })
      .getOne();
  }

  async findById(id: string): Promise<Product | undefined> {
    return await this.ormRepository.findOne(id);
  }
}
