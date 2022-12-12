import { container } from 'tsyringe';

import ProductRepository from '../../repositories/implementations/ProductRepository';
import IProductRepository from '../../repositories/IProductRepository';

import OrderRepository from '../../repositories/implementations/OrderRepository';
import IOrderRepository from '../../repositories/IOrderRepository';

import OrderPadRepository from '../../repositories/implementations/OrderPadRepository';
import IOrderPadRepository from '../../repositories/IOrderPadRepository';

import OrderProductsRepository from '../../repositories/implementations/OrderProductsRepository';
import IOrderProductsRepository from '../../repositories/IOrderProductsRepository';

import TableRepository from '../../repositories/implementations/TableRepository';
import ITableRepository from '../../repositories/ITableRepository';

import CategoryRepository from '../../repositories/implementations/CategoryRepository';
import ICategoryRepository from '../../repositories/ICategoryRepository';

import SectorRepository from '../../repositories/implementations/SectorRepository';
import ISectorRepository from '../../repositories/ISectorRepository';

import UserRepository from '../../repositories/implementations/UserRepository';
import IUserRepository from '../../repositories/IUserRepository';

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);

container.registerSingleton<IOrderRepository>(
  'OrderRepository',
  OrderRepository
);

container.registerSingleton<IOrderPadRepository>(
  'OrderPadRepository',
  OrderPadRepository
);

container.registerSingleton<IOrderProductsRepository>(
  'OrderProductsRepository',
  OrderProductsRepository
);

container.registerSingleton<ITableRepository>(
  'TableRepository',
  TableRepository
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
);

container.registerSingleton<ISectorRepository>(
  'SectorRepository',
  SectorRepository
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
