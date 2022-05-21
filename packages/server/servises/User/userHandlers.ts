import {
  TCreateUserMethod,
  TGetUserMethod,
  TUserSearchParams,
  TCheckCredentialsUserMethod,
  TCheckCredentialsParams,
} from './types';
import { DB as db } from './mockDb';
import { CODES as codes } from '@server/global';

const keys = <T>(params?: T): Extract<keyof T, string>[] | null => {
  if (typeof params !== 'object') return null;

  const b = [];
  for (const key in params) {
    b.push(key);
  }

  return b;
};

const createUser: TCreateUserMethod = async ({ body }) => {
  if (!body) {
    return {
      code: codes.BAD_REQUEST,
    };
  }

  try {
    const response = await db.create(body);

    return {
      code: codes.OK,
      data: response,
    };
  } catch (err) {
    throw Error('Something Went Wrong');
  }
};

const getUser: TGetUserMethod = async ({ body }) => {
  try {
    const key = (keys<TUserSearchParams>(body) || [])[0];

    const value = body ? body[key] : null;

    if (!value) {
      return {
        code: codes.BAD_REQUEST,
        errors: [{ type: '[User service]', message: `You should provide value for ${key}` }],
      };
    }
    const response = await db.findBy({ key, value });

    return {
      code: codes.OK,
      data: response,
    };
  } catch (error) {
    throw Error('Something Went Wrong');
  }
};

const checkCredentials: TCheckCredentialsUserMethod = async ({ body }) => {
  try {
    if (!body?.email && !body?.password) {
      return {
        code: codes.BAD_REQUEST,
        errors: [{ type: '[User service]', message: `You should provide passwod and email` }],
      };
    }

    const response = await db.findBy({ email: body.email, password: body.password });

    return {
      code: codes.OK,
      data: response,
    };
  } catch (error) {
    throw Error('Something Went Wrong');
  }
};

export { getUser, createUser };
