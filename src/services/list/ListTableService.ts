import { inject, injectable } from 'tsyringe';
import ITableRepository from '../../repositories/ITableRepository';

@injectable()
export default class ListTableService {
  constructor(
    @inject('TableRepository')
    private tableRepository: ITableRepository
  ) {}

  async execute() {
    const tables = await this.tableRepository.index();
    if (!tables) throw new Error('Erro ao listar mesas.');
    return tables;
  }
}
