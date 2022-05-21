import { CODES } from '@server/global';
import db from './db';
import { TUserMethods, TUserSearchParams } from './types';
import { CustomErrors } from '../../ErrorHandler'; //TODO: add to module

export const userService = (userHandlers: TUserMethods, authHandlers?: any) => {
  return {
    '/user': (arg) => {
      const user = userHandlers?.getUser(arg);
    },
  };
};
