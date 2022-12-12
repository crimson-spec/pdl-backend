import { inject, injectable } from 'tsyringe';
import ITableRepository from '../../repositories/ITableRepository';

interface IRequest {
  description: string;
  status: boolean;
}

@injectable()
export default class CreateTableService {
  constructor(
    @inject('TableRepository')
    private tableRepository: ITableRepository
  ) {}

  public async execute({ description, status }: IRequest) {
    const table = await this.tableRepository.create({
      description,
      status,
    });
    if (!table) throw new Error('Erro ao criar mesa.');
    return table;
  }
}
