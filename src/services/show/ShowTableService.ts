import { inject, injectable } from 'tsyringe';
import ITableRepository from '../../repositories/ITableRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

@injectable()
export default class ShowTableService {
  constructor(
    @inject('TableRepository')
    private tableRepository: ITableRepository
  ) {}

  async execute(id: string) {
    const table = await this.tableRepository.show(id);
    if (!table) throw new BadRequestError('Mesa não encontrada.');

    return table;
  }
}
