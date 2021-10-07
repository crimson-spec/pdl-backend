import { inject, injectable } from "tsyringe";
import ITableRepository from "@orders/infra/typeorm/repositories/ITableRepository";
import AppError from "@shared/infra/http/middlewares/errors";

interface IRequest {
	internal_number: number;
	hash_code: string;
	in_use: boolean;
}

@injectable()
export default class CreateTableService {
	constructor(
		@inject('TableRepository')
		private tableRepository: ITableRepository,
	) { }

	public async execute({ internal_number, hash_code, in_use }: IRequest) {
		const table = await this.tableRepository.create({
			internal_number,
			hash_code,
			in_use
		});
		if (!table) throw new AppError("Fail to create Table");
		return table;
	}
}