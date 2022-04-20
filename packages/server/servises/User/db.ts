import { DB } from './mockDb';
import { TUser, TUserModel } from '../User/types';

// type TUserTable = TUser & { id: string };

type TDB = {
  create: (user: TUser) => Promise<TUserModel | Error>;
};

const crudDB = (table: TDB) => ({
  // findBy: async ({ key, value }: { key: string; value: string }) => {
  //   return table.find((item: any) => item[key] === value) || [];
  // },
  create: async (user: TUser) => {
    const response = await table.create(user);

    return response;
  },
});

export default crudDB(DB);
