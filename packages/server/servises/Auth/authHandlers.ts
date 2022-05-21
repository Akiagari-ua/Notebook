import { CODES as codes } from '@server/global';

import jwt from 'jsonwebtoken';
import 'dotenv/config';

import { TCreateSession } from './types';
import { DB as db } from './mockDb';

export const createSession: TCreateSession = async ({ body }) => {
  if (!body?.userId) {
    const error = new Error();
    //@ts-ignore
    error.code = codes.BAD_REQUEST;
    return {
      code: codes.BAD_REQUEST,
      errors: [error],
    };
  }

  const privateKey = process.env.SECRET_KEY || 'key';

  const session = await db.create({ userId: body.userId });
  const accessToken = jwt.sign({ userId: body.userId, iat: '15m' }, privateKey);

  return {
    code: codes.OK,
    data: { ...session, accessToken },
  };
};
