import fs from 'fs/promises';
import { TUser, TUserModel } from './types';
import { v4 as uuidv4 } from 'uuid';

export const DB = {
  async create(user: TUser): Promise<TUserModel | Error> {
    try {
      const file = await fs.readFile('./user.json');
      const parsedFile = JSON.parse(file.toString()) as TUserModel[];

      const findedUser = parsedFile.find((item) => item.email === user.email);
      if (findedUser) return new Error('user already exist');

      const id = uuidv4();

      fs.writeFile('./user.json', JSON.stringify([...parsedFile, { ...user, id }]));

      return { ...user, id };
    } catch (e) {
      const id = uuidv4();
      fs.writeFile('./user.json', JSON.stringify([{ ...user, id }]));

      return { ...user, id };
    }

    // console.log(file.toString());
    // fs.writeFile('./user.json', `${Math.random()}`);
  },
};
