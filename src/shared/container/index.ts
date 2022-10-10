import { container } from 'tsyringe';

import ProductRepository from '@orders/infra/typeorm/repositories/implementations/ProductRepository';
import IProductRepository from '@orders/infra/typeorm/repositories/IProductRepository';

import OrderRepository from '@orders/infra/typeorm/repositories/implementations/OrderRepository';
import IOrderRepository from '@orders/infra/typeorm/repositories/IOrderRepository';

import OrderPadRepository from '@orders/infra/typeorm/repositories/implementations/OrderPadRepository';
import IOrderPadRepository from '@orders/infra/typeorm/repositories/IOrderPadRepository';

import OrderProductsRepository from '@orders/infra/typeorm/repositories/implementations/OrderProductsRepository';
import IOrderProductsRepository from '@orders/infra/typeorm/repositories/IOrderProductsRepository';

import TableRepository from '@orders/infra/typeorm/repositories/implementations/TableRepository';
import ITableRepository from '@orders/infra/typeorm/repositories/ITableRepository';

import CategoryRepository from '@orders/infra/typeorm/repositories/implementations/CategoryRepository';
import ICategoryRepository from '@orders/infra/typeorm/repositories/ICategoryRepository';

import UserRepository from '@modules/admin/infra/typeorm/repositories/implementations/UserRepository';
import IUserRepository from '@modules/admin/infra/typeorm/repositories/IUserRepository';

import AdminRepository from '@modules/admin/infra/typeorm/repositories/implementations/AdminRepository';
import IAdminRepository from '@modules/admin/infra/typeorm/repositories/IAdminRepository';

import EmployeeRepository from '@modules/admin/infra/typeorm/repositories/implementations/EmployeeRepository';
import IEmployeeRepository from '@modules/admin/infra/typeorm/repositories/IEmployeeRepository';

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

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IAdminRepository>(
  'AdminRepository',
  AdminRepository
);

container.registerSingleton<IEmployeeRepository>(
  'EmployeeRepository',
  EmployeeRepository
);
