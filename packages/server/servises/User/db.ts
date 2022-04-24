import { DB } from './mockDb';
import { TUser, TUserModel, TUserSearchParams } from '../User/types';
import { CustomErrors } from '../../ErrorHandler'; //TODO: add to module

// type TUserTable = TUser & { id: string };

type TReadBy = {
  key: keyof TUserSearchParams;
  value: string;
};

type TDB = {
  create: (user: TUser) => Promise<TUserModel | Error>;
  findBy: (params: TReadBy) => Promise<TUserModel[] | Error>;
};

const crudDB = (table: TDB) => ({
  // findBy: async ({ key, value }: { key: string; value: string }) => {
  //   return table.find((item: any) => item[key] === value) || [];
  // },
  create: async (user: TUser) => {
    try {
      const response = await table.create(user);

      return response;
    } catch (err) {
      if (err instanceof Error) throw new CustomErrors({ type: 'conflict', message: 'User already exist' }); //TODO: come up with solution fro check error types

      throw new CustomErrors({ type: '[crudDb]', message: 'Something went wrong' });
    }
  },
  readBy: async (params: TReadBy) => {
    try {
      const response = await table.findBy(params);

      return response;
    } catch (err) {
      if (err instanceof Error) throw new CustomErrors({ type: 'Not Found', message: 'User not Found' }); //TODO: come up with solution fro check error types

      throw new CustomErrors({ type: '[crudDb]', message: 'Something went wrong' });
    }
  },
});

export default crudDB(DB);
