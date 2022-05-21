import { THandler } from '@server/global';

export type TUser = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export type TUserModel = Omit<TUser, 'password'> & { id: string };
export type TUserSearchParams = {
  [P in keyof TUserModel]?: string;
};
export type TCheckCredentialsParams = Pick<TUser, 'email' | 'password'>;

type TDB = {
  create: (user: TUser) => Promise<TUserModel | Error>;
  findBy: (params?: any) => Promise<TUserModel[] | Error>;
};

export type TCreateUserMethod = THandler<void, TUser>;
export type TGetUserMethod = THandler<void, TUserSearchParams>;
export type TCheckCredentialsUserMethod = THandler<void, TCheckCredentialsParams>;

export interface TUserMethods {
  createUser: TCreateUserMethod;
  getUser: TGetUserMethod;
  checkCredentials: TCheckCredentialsUserMethod;
}
