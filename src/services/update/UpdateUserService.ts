import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../repositories/IUserRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  id: string;
  name?: string;
  username?: string;
  is_admin?: boolean;
}

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  public async execute({ id, name, username, is_admin }: IRequest) {
    const userExists = await this.userRepository.findById(id);
    if (!userExists) throw new BadRequestError('Usuário não encontrado.');
    const user = await this.userRepository.update({
      id,
      name,
      username,
      is_admin,
    });

    delete user.password;

    return user;
  }
}
