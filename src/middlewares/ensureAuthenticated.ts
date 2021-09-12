import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: "Token not provided" });
  }

  const [, tokenSplit] = token.split(" ");

  try {
    const { sub } = verify(tokenSplit, process.env.JWT_PAYLOAD) as IPayload;

    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).json({ message: "Token invalid" });
  }
}
