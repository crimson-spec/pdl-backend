import { inject, injectable } from 'tsyringe';
import ITableRepository from '../../repositories/ITableRepository';

interface IRequest {
  id: string;
  description?: string;
  status?: boolean;
}

@injectable()
export default class UpdateTableService {
  constructor(
    @inject('TableRepository')
    private tableRepository: ITableRepository
  ) {}

  public async execute({ id, description, status }: IRequest) {
    const table = await this.tableRepository.update({
      id,
      description,
      status,
    });
    if (!table) throw new Error('Erro ao atualizar mesa.');
    return table;
  }
}
