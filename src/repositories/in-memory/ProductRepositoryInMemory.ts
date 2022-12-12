import ICreateProductDTO from '../../dtos/create/ICreateProductDTO';
import IUpdateProductDTO from '../../dtos/update/IUpdateProductDTO';
import Product from '../../models/Product';
import IProductRepository from '../IProductRepository';

export default class ProductRepositoryInMemory implements IProductRepository {
  findByDescription(description: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  hasInventory(id: string, quantity: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  index(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  show(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  create(data: ICreateProductDTO): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  update(data: IUpdateProductDTO): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  private products: Product[] = [];
}
