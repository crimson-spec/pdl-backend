import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import IUserRepository from '../../repositories/IUserRepository';
import { BadRequestError } from '../../shared/classes/ApiError';

interface IRequest {
  username: string;
  password: string;
}

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  public async execute({ username, password }: IRequest) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new BadRequestError('Usuário ou senha incorretos.');
    const matchPassword = await compare(password, user.password);
    if (!matchPassword)
      throw new BadRequestError('Usuário ou senha incorretos.');
    if (!user.is_admin)
      throw new BadRequestError('Este usuário não é um administrador.');
    const token = sign(
      {
        id: user.id,
      },
      process.env.JWT_HASH,
      {
        subject: '',
        expiresIn: '1d',
      }
    );

    delete user.password;

    return {
      token,
      user,
    };
  }
}
