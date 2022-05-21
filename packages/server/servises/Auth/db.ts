import { DB as table } from './mockDb';
import { TUser } from '../User/types';
import { CustomErrors } from '../../ErrorHandler'; //TODO: add to module

const crudDB = {
  create: async (user: TUser) => {
    try {
      const response = await table.create(user);

      return response;
    } catch (err) {
      if (err instanceof Error) throw new CustomErrors({ type: 'conflict', message: 'User already exist' }); //TODO: come up with solution fro check error types

      throw new CustomErrors({ type: '[crudDb]', message: 'Something went wrong' });
    }
  },
  readBy: async (params?: any) => {
    try {
      const response = await table.findBy(params);

      return response;
    } catch (err) {
      if (err instanceof Error) throw new CustomErrors({ type: 'Not Found', message: 'User not Found' }); //TODO: come up with solution fro check error types

      throw new CustomErrors({ type: '[crudDb]', message: 'Something went wrong' });
    }
  },
};

export default crudDB;
