import { inject, injectable } from 'tsyringe';
import IOrderPadRepository from '../../repositories/IOrderPadRepository';
import { sign } from 'jsonwebtoken';
interface IRequest {
  table_id: string;
  contact?: string;
  ipv4?: string;
}

@injectable()
export default class CreateOrderPadService {
  constructor(
    @inject('OrderPadRepository')
    private orderPadRepository: IOrderPadRepository
  ) {}
  async execute({ table_id, contact, ipv4 }: IRequest) {
    const orderpad = await this.orderPadRepository.create({
      table_id,
      contact,
      ipv4,
    });

    if (!orderpad) throw new Error('Erro ao abrir comanda. Tente novamente.');

    const token = sign(
      {
        order_pad_id: orderpad.id,
      },
      process.env.JWT_CLIENT_SECRET,
      {
        subject: '',
        expiresIn: '12h',
      }
    );

    // Notificar no sistema que uma nova comanda foi gerada.

    return { token };
  }
}
