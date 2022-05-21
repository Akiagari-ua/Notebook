import fs from 'fs/promises';
import { TAuth } from './types';
import { v4 as uuidv4 } from 'uuid';

const message = 'conflict';

type TFindBy = {
  key: keyof TUserSearchParams;
  value: string | number;
};

const checkIsExistingFile = async (path: string) => {
  try {
    if (!path) throw Error('path is required');

    await fs.access(path);

    return true;
  } catch (e) {
    return false;
  }
};

export const DB = {
  async create(user: TUser): Promise<TUserModel | Error> {
    const id = uuidv4();
    const isExist = await checkIsExistingFile('./auth.json');

    if (!isExist) {
      fs.writeFile('./auth.json', JSON.stringify([{ ...user, id }]));
      return { ...user, id };
    }

    const file = await fs.readFile('./user.json');
    const parsedFile = JSON.parse(file.toString()) as TUserModel[];

    const findedUser = parsedFile.find((item) => item.email === user.email);
    if (findedUser) throw Error(message);

    fs.writeFile('./user.json', JSON.stringify([...parsedFile, { ...user, id }]));

    return { ...user, id };
  },
  async findBy(params: TFindBy): Promise<TUserModel[] | Error> {
    const isExist = await checkIsExistingFile('./user.json');

    if (!isExist) {
      throw Error('not found');
    }
    const file = await fs.readFile('./user.json');
    const parsedFile = JSON.parse(file.toString()) as TUserModel[];

    const findedUser = parsedFile.filter((item) => item[params.key] === params.value) || [];

    if (findedUser.length) {
      return findedUser;
    }

    throw Error('not found');
  },
};
