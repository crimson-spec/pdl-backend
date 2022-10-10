import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import AppError from '@shared/infra/http/middlewares/errors';
import IUserRepository from '@modules/admin/infra/typeorm/repositories/IUserRepository';
import IAdminRepository from '@modules/admin/infra/typeorm/repositories/IAdminRepository';
import IEmployeeRepository from '@modules/admin/infra/typeorm/repositories/IEmployeeRepository';

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
    private userRepository: IUserRepository,
    @inject('AdminRepository')
    private adminRepository: IAdminRepository,
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ) {}
  public async execute({ name, username, password, is_admin }: IRequest) {
    const userExists = await this.userRepository.findByUsername(username);
    if (userExists) throw new AppError('User Already Exists!');
    const hash_pass = await hash(password, 8);
    const user = await this.userRepository.create({
      name,
      username,
      password: hash_pass,
    });
    if (is_admin) {
      const admin = await this.adminRepository.create(user.id);
    } else {
      const employee = await this.employeeRepository.create(user.id);
    }
    return user;
  }
}
