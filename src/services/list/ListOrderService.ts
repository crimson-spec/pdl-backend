import { inject, injectable } from 'tsyringe';
import IOrderRepository from '../../repositories/IOrderRepository';

@injectable()
export default class ListOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}
  public async execute() {
    const orders = await this.orderRepository.index();
    if (!orders) throw new Error('Erro ao listar pedidos.');
    return orders;
  }
}
