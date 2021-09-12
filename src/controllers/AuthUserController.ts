import { Request, Response } from "express";

import { AuthUserService } from "../services/AuthUserService";

class AuthUserController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserService = new AuthUserService();

    const token = await authUserService.execute({ email, password });

    return response.json({
      token: token,
    });
  }
}

export { AuthUserController };
