import { inject, injectable } from "tsyringe";
import IOrderPadRepository from "@orders/infra/typeorm/repositories/IOrderPadRepository";
import AppError from "@shared/infra/http/middlewares/errors";

@injectable()
export default class AlterTableIdService {
    constructor(
        @inject('OrderPadRepository')
        private orderPadRepository: IOrderPadRepository,
    ) { }

    public async execute(id: number, table_id?: number) {
        const orderPad = await this.orderPadRepository.update({
            id,
            table_id
        });
        if (!orderPad) throw new AppError("Fail to Update OrderPad");
        return;
    }
}
