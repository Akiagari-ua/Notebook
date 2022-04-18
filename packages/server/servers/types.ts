import type { URLSearchParams } from 'url';
import type { TUserMethods } from '@notepad/user-servise';

export enum CODES {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
}

export type TResponse = {
  code: CODES;
  data?: any;
  errors?: any[];
};

export type THandlerArgs<Body = undefined> = {
  body?: Body;
  searchParams?: URLSearchParams;
};

export type THandler<Body = undefined> = (arg: THandlerArgs<Body>) => Promise<TResponse>;

export type TServerRouting = {
  user: TUserMethods;
};

export type TServer = {
  port: number;
  hostname: string;
  routing: TServerRouting;
};
