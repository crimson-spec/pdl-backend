import { inject, injectable } from 'tsyringe';
import ITableRepository from '../../repositories/ITableRepository';
import { NotFoundError } from '../../shared/classes/ApiError';

@injectable()
export default class DeleteTableService {
  constructor(
    @inject('TableRepository')
    private tableRepository: ITableRepository
  ) {}
  public async execute(id: string) {
    const deleted = await this.tableRepository.delete(id);
    if (!deleted) throw new NotFoundError('Mesa não existe.');
  }
}
