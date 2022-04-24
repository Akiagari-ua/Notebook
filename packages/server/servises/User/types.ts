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

export type TCreateUserMethod = THandler<TUser>;
export type TGetUserMethod = THandler<void, TUserSearchParams>;

export interface TUserMethods {
  createUser: TCreateUserMethod;
  getUser: TGetUserMethod;
}
