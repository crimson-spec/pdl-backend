import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/create/CreateUserService';
import DeleteUserService from '../services/delete/DeleteUserService';
import UpdateUserService from '../services/update/UpdateUserService';

class UserController {
  async create(request: Request, response: Response) {
    const { name, username, password, is_admin } = request.body;
    const service = container.resolve(CreateUserService);
    const user = await service.execute({
      name,
      username,
      password,
      is_admin,
    });
    return response.status(201).json(user);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, username, is_admin } = request.body;
    const service = container.resolve(UpdateUserService);
    const user = await service.execute({
      id,
      name,
      username,
      is_admin,
    });
    return response.status(200).json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = container.resolve(DeleteUserService);
    await service.execute(id);
    return response.status(200).send();
  }

  async changePassword(request: Request, response: Response) {
    return response.send('Senha alterada com sucesso!');
  }
}

export default new UserController();
