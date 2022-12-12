import { Request, Response, NextFunction } from 'express';
import { verify, TokenExpiredError } from 'jsonwebtoken';

interface TokenPayload {
  order_pad_id: string;
  iat: number;
  exp: number;
}

export const verifyOrderPad = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const orderPadToken = request.headers.authorization;
  if (orderPadToken) {
    const token = orderPadToken.split(' ')[1];
    try {
      const payload = verify(
        token,
        process.env.JWT_CLIENT_SECRET
      ) as TokenPayload;
      request.order_pad_id = payload.order_pad_id;
      return next();
    } catch (error) {
      console.log(error);
      if (error instanceof TokenExpiredError) {
        return response
          .status(400)
          .json({ message: 'Sua comanda expirou.', statusCode: 400 });
      }
    }
  }
  return response
    .status(400)
    .send({ message: 'Erro na comanda.', statusCode: 400 });
};
