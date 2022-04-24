import { CODES } from '@server/global';
import db from './db';
import { TUserMethods, TUserSearchParams } from './types';
import { CustomErrors } from '../../ErrorHandler'; //TODO: add to module

const keys = <T>(params: T): Extract<keyof T, string>[] | null => {
  if (typeof params !== 'object') return null;

  const b = [];
  for (const key in params) {
    b.push(key);
  }

  return b;
}; //TODO: add too general helpers

export const userServise: TUserMethods = {
  createUser: async (args) => {
    if (!args.body) {
      return {
        code: CODES.BAD_REQUEST,
      };
    }

    try {
      const response = await db.create(args.body);

      return {
        code: CODES.OK,
        data: response,
      };
    } catch (err) {
      if (err instanceof CustomErrors) {
        return {
          code: CODES.CONFLICT, //TODO: come up with solution for check error types
          errors: [{ type: err?.type, message: err?.message }],
        };
      }
      return {
        code: CODES.BAD_REQUEST,
        errors: [{ type: '[User service]', message: 'Something Went Wrong' }],
      };
    }
  },
  getUser: async ({ searchParams }) => {
    if (!searchParams)
      return {
        code: CODES.BAD_REQUEST,
        errors: [{ type: '[User service]', message: 'You shoud provide params for looking' }],
      };

    const key = (keys<TUserSearchParams>(searchParams) || [])[0];

    const value = searchParams[key];

    if (!value) {
      return {
        code: CODES.BAD_REQUEST,
        errors: [{ type: '[User service]', message: `You should provide value for ${key}` }],
      };
    }

    try {
      const response = await db.readBy({ key, value });

      return {
        code: CODES.OK,
        data: response,
      };
    } catch (error) {
      if (error instanceof CustomErrors) {
        return { code: CODES.BAD_REQUEST, errors: [{ message: error.message, type: error.type }] };
      }

      return {
        code: CODES.BAD_REQUEST, //TODO: add code with 500,
        errors: [{ type: '[User service]', message: 'Something went wrong' }],
      };
    }
  },
};
