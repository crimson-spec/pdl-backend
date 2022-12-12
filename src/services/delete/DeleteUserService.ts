import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../repositories/IUserRepository';
import { BadRequestError, NotFoundError } from '../../shared/classes/ApiError';

@injectable()
export default class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  public async execute(id: string) {
    const deleted = await this.userRepository.delete(id);
    if (!deleted) throw new NotFoundError('Usuário não existe.');
  }
}
