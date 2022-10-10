import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/admin/users/createUserUseCase/CreateUserService';

export default class CreateUserController {
  public async handle(request: Request, response: Response) {
    const { name, username, password, is_admin } = request.body;
    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      name,
      username,
      password,
      is_admin,
    });
    return response.status(201).json(user);
  }
}
