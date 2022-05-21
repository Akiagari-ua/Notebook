// import type { URLSearchParams } from 'url';
import type { TUserMethods } from '@notepad/user-servise';

export enum CODES {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  CONFLICT = 409,
}

export type TResponse = {
  code: CODES;
  data?: any;
  errors?: any[];
};

export type THandlerArgs<DB, Body = undefined> = {
  body?: Body;
  codes: typeof CODES;
  db: DB;
};

export type THandler<DB, Body = undefined> = (arg: THandlerArgs<DB, Body>) => Promise<TResponse>;

export type TServerRouting = {
  user: TUserMethods;
};

export type TServer = {
  port: number;
  hostname: string;
  routing: TServerRouting;
};
