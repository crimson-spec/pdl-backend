import ICreateProductDTO from '../dtos/create/ICreateProductDTO';
import IUpdateProductDTO from '../dtos/update/IUpdateProductDTO';
import Product from '../models/Product';

export default interface IProductRepository {
  findByDescription(description: string): Promise<Product | undefined>;
  findById(id: string): Promise<Product>;
  hasInventory(id: string, quantity: number): Promise<boolean>;
  index(): Promise<Product[]>;
  show(id: string): Promise<Product>;
  create(data: ICreateProductDTO): Promise<Product>;
  update(data: IUpdateProductDTO): Promise<Product>;
  delete(id: string): Promise<boolean>;
}
