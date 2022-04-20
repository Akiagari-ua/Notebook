import { THandler } from '@server/global';

export type TUser = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export type TUserModel = TUser & { id: string };

export type TCreateUserMethod = THandler<TUser>;
export type TGetUserMethod = THandler;

export interface TUserMethods {
  createUser: TCreateUserMethod;
  getUser: TGetUserMethod;
}
