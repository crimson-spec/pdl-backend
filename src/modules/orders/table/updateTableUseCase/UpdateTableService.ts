import { inject, injectable } from "tsyringe";
import ITableRepository from "@orders/infra/typeorm/repositories/ITableRepository";
import AppError from "@shared/infra/http/middlewares/errors";

interface IRequest {
	id: number;
	internal_number?: number;
	hash_code?: string;
	in_use?: boolean;
}

@injectable()
export default class UpdateTableService {
	constructor(
		@inject('TableRepository')
		private tableRepository: ITableRepository,
	) { }

	public async execute({ id, internal_number, hash_code, in_use }: IRequest) {
		const tableExists = await this.tableRepository.findById(id);
		if (!tableExists) throw new AppError("Table does not exist!");
		const table = await this.tableRepository.update({
			id,
			internal_number,
			hash_code,
			in_use
		});
		if (!table) throw new AppError("Fail to update Table");
		return table;
	}
}