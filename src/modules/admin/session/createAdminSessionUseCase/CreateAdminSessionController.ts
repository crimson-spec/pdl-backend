import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAdminSessionService from '@modules/admin/session/createAdminSessionUseCase/CreateAdminSessionService';

export default class CreateAdminSessionController {
  public async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    console.log('aq');
    const createAdminSessionService = container.resolve(
      CreateAdminSessionService
    );
    const session = await createAdminSessionService.execute({
      username,
      password,
    });
    return response.status(200).json(session);
  }
}
