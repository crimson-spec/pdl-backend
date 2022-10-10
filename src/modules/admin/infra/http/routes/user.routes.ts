import { Router } from 'express';
import CreateUserController from '@modules/admin/users/createUserUseCase/CreateUserController';

const createUserController = new CreateUserController();

const userRouter = Router();

userRouter.post('/', createUserController.handle);

export default userRouter;
