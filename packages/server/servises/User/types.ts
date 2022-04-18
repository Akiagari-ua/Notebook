import { THandler } from '@server/global';

export type TCreateUserBody = {
  email: string;
  password: string;
};

export type TCreateUserMethod = THandler<TCreateUserBody>;
export type TGetUserMethod = THandler;

export interface TUserMethods {
  createUser: TCreateUserMethod;
  getUser: TGetUserMethod;
}
