import User from '../models/User';
import UserRepositoryInMemory from '../repositories/in-memory/UserRepositoryInMemory';
import CreateUserService from '../services/create/CreateUserService';
import UpdateUserService from '../services/update/UpdateUserService';

describe('Create Repository', async () => {
  const userRepo = new UserRepositoryInMemory();
  const createUser = new CreateUserService(userRepo);
  const updateUser = new UpdateUserService(userRepo);

  let _user;

  it('It should create an user instance and then return it', async () => {
    const user = {
      name: 'User',
      username: 'user',
      password: 'user',
      is_admin: true,
    };

    _user = await createUser.execute(user);

    expect(_user).toBeInstanceOf(User);
  });

  it('It should update name of user created', async () => {
    _user.name = 'Other';

    const user_updated = await updateUser.execute(_user);

    expect(user_updated).toBeInstanceOf(User);
  });
});

// describe('Create session', () => {
//   it('It should thorws an error on search for admin', async () => {
//     const user = {
//       username: 'user',
//       password: 'user',
//     };

//     const createSession = new CreateAdminSessionService(userRepo, adminRepo);
//     await expect(createSession.execute(user)).rejects.toEqual({
//       message: 'Admin não existe!',
//       status: 400,
//     });
//   });
// });
