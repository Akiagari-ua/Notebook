import { CODES } from '@server/global';
import db from './db';
import { TUserMethods } from './types';

export const userServise: TUserMethods = {
  createUser: async (args) => {
    if (!args.body) {
      return {
        code: CODES.BAD_REQUEST,
      };
    }

    const response = await db.create(args.body);

    return {
      code: CODES.OK,
      data: response,
    };
  },
  getUser: async (args) => ({
    code: CODES.BAD_REQUEST,
  }),
};
