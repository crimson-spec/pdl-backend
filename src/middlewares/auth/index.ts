import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  user_id: number;
  iat: number;
  exp: number;
}

export const ensureAuthMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;
  if (authToken) {
    const token = authToken.split(' ')[1];
    try {
      const payload = verify(token, process.env.JWT_HASH) as TokenPayload;
      // ir na base de dados e carregar as permissions
      request.user = { id: payload.user_id, permissions: [] };
      return next();
    } catch (error) {
      console.log(error);
    }
  }
  return response.status(401).send();
};
