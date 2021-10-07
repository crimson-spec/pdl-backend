import { inject, injectable } from "tsyringe";
import IOrderPadRepository from "@orders/infra/typeorm/repositories/IOrderPadRepository";
import AppError from "@shared/infra/http/middlewares/errors";

interface IRequest {
  id: number;
  table_id?: number;
  hash_code?: string;
  in_use?: boolean;
}

@injectable()
export default class UpdateOrderPadService {
  constructor(
    @inject('OrderPadRepository')
    private orderPadRepository: IOrderPadRepository,
  ) { }

  public async execute({ id, table_id, hash_code, in_use }: IRequest) {
    const orderPad = await this.orderPadRepository.update({
      id,
      table_id,
      hash_code,
      in_use
    });
    if (!orderPad) throw new AppError("Fail to Update OrderPad");
    return;
  }
}
