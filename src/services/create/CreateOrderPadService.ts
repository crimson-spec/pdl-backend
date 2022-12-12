import { inject, injectable } from 'tsyringe';
import IOrderPadRepository from '../../repositories/IOrderPadRepository';

interface IRequest {
  contact?: string;
  ipv4?: string;
}

@injectable()
export default class CreateOrderPadService {
  constructor(
    @inject('OrderPadRepository')
    private orderPadRepository: IOrderPadRepository
  ) {}
  async execute({ contact, ipv4 }: IRequest) {}
}
