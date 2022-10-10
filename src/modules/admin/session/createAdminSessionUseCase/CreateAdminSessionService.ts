import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AppError from '@shared/infra/http/middlewares/errors';
import IUserRepository from '@modules/admin/infra/typeorm/repositories/IUserRepository';
import IAdminRepository from '@modules/admin/infra/typeorm/repositories/IAdminRepository';

interface IRequest {
  username: string;
  password: string;
}

@injectable()
export default class CreateAdminSessionService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('AdminRepository')
    private adminRepository: IAdminRepository
  ) {}
  public async execute({ username, password }: IRequest) {
    const admin = await this.adminRepository.findByUsername(username);
    if (!admin) throw new AppError('Admin não existe!');
    const matchPassword = await compare(password, admin.user.password);
    if (!matchPassword) throw new AppError('Usuário ou senha incorretos!');
    const token = sign({}, process.env.JWT_HASH, {
      subject: '',
      expiresIn: '1d',
    });

    return {
      token,
      user: {
        ...admin.user,
      },
    };
  }
}
