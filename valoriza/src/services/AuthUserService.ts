import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: IAuthRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const findUser = await usersRepository.findOne({
      where: {
        email,
      },
    });

    if (!findUser) {
      throw new Error("Email/Password incorrect.");
    }

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) {
      throw new Error("Email/Password incorrect.");
    }

    const token = sign(
      {
        email: findUser.email,
      },
      process.env.JWT_PAYLOAD,
      {
        subject: findUser.id,
        expiresIn: process.env.JWT_EXPIRESIN,
      }
    );

    return token;
  }
}

export { AuthUserService };
