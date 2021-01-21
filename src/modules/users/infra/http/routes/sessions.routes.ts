import { Router } from 'express';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepositories';

import AuthUserService from '@modules/users/services/AuthUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authUser = new AuthUserService(usersRepository);

  const { user, token } = await authUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
