import { inject, injectable } from 'tsyringe';
import IOrderProductsRepository from '../../repositories/IOrderProductsRepository';
import IOrderRepository from '../../repositories/IOrderRepository';
import IProductRepository from '../../repositories/IProductRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  order_pad_id: string;
  products: any[];
  observation?: string;
}
@injectable()
export default class CreateOrderService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
    @inject('OrderProductsRepository')
    private orderProductsRepository: IOrderProductsRepository
  ) {}
  public async execute({ order_pad_id, products, observation }: IRequest) {
    for (const product of products) {
      const hasInventory = await this.productRepository.hasInventory(
        product.product_id,
        product.quantity
      );

      if (!hasInventory) {
        throw new BadRequestError('Produto não disponível');
      }
    }

    const order = await this.orderRepository.create({
      order_pad_id,
      observation,
    });

    for (const product of products) {
      const _product = await this.productRepository.findById(
        product.product_id
      );
      const _quantity = product.quantity;
      const _observation = product.observation;

      await this.orderProductsRepository.create({
        order_id: order.id,
        product_id: _product.id,
        quantity: _quantity,
        observation: _observation,
      });

      await this.productRepository.update({
        id: _product.id,
        quantity: _product.quantity - _quantity,
      });
    }

    return order;
  }
}
