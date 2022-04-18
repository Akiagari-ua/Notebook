import { CODES } from '@server/global';
import type { TUserMethods } from './types';

export const userServise: TUserMethods = {
  createUser: async (args) => ({
    code: CODES.OK,
    data: { ...args, params: args.searchParams?.getAll('id') },
  }),
  getUser: async (args) => ({
    code: CODES.BAD_REQUEST,
  }),
};
