import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSessionService from '../services/create/CreateSessionService';

class SessionController {
  public async admin(request: Request, response: Response) {
    const { username, password } = request.body;

    const service = container.resolve(CreateSessionService);
    const session = await service.execute({
      username,
      password,
    });
    return response.status(200).json(session);
  }

  public async waiter(request: Request, response: Response) {
    // const { username, password } = request.body;

    // const createAdminSessionService = container.resolve(
    //   CreateAdminSessionService
    // );
    // const session = await createAdminSessionService.execute({
    //   username,
    //   password,
    // });
    // return response.status(200).json(session);
    return response.send('Waiter');
  }
}

export default new SessionController();
