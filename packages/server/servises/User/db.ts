import { DB } from './mockDb';
import { v4 as uuidv4 } from 'uuid';
import { TUser } from '../User/types';

type TUserTable = TUser & { id: string };

type TDB = {
  create: () => void;
};

const crudDB = (table: TDB) => ({
  // findBy: async ({ key, value }: { key: string; value: string }) => {
  //   return table.find((item: any) => item[key] === value) || [];
  // },
  create: async (user: TUser) => {
    const id = uuidv4();
    console.log('22222222222222');
    table.create();

    return { ...user, id };
  },
});

export default crudDB(DB);
