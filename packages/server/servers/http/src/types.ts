import type { URLSearchParams } from 'url';

export enum Routing {
  USER = 'user',
}

export enum Methods {
  CREATE_USER = 'createUser',
  GET_USER = 'getUser',
}

export enum CODES {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
}

export type THandlerArgs<Body = undefined> = {
  body?: Body;
  searchParams?: URLSearchParams;
};

export type TResponse = {
  code: CODES;
  data?: any;
  errors?: any[];
};

export type THandler<Body = undefined> = (arg: THandlerArgs<Body>) => Promise<TResponse>;

export type TCreateUserBody = {
  email: string;
  password: string;
};

export type TCreateUserMethod = THandler<TCreateUserBody>;
export type TGetUserMethod = THandler;

export interface TUserMethods {
  [Methods.CREATE_USER]: TCreateUserMethod;
  [Methods.GET_USER]: TGetUserMethod;
}

export type TServerRouting = {
  [Routing.USER]: TUserMethods;
};

export type TServer = {
  port: number;
  hostname: string;
  routing: TServerRouting;
};
