import { inject, injectable } from 'tsyringe';
import IUserRepository from '../../repositories/IUserRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  name: string;
  username: string;
  password: string;
  is_admin: boolean;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  public async execute({ name, username, password, is_admin }: IRequest) {
    const userExists = await this.userRepository.findByUsername(username);
    if (userExists) throw new BadRequestError('Usuário já existe.');
    const user = await this.userRepository.create({
      name,
      username,
      password,
      is_admin,
    });

    if (!user) throw new Error('Erro ao criar usuário.');
    delete user.password;

    return user;
  }
}
