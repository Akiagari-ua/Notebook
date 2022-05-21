import { THandler } from '@server/global';
import type { TUserMethods, TUser } from '@notepad/user-servise';

export type TSession = {
  id: string;
  refreshToken: string;
  accessToken: string;
};

export type TAuth = {
  userId: string;
  sessions: Omit<TSession, 'accessToken'>[];
};

type TUserAuthData = {
  userId: string;
};

type TDB = {
  create: (data: TUserAuthData) => Promise<TAuth | Error>;
};

export type TCreateSession = THandler<void, TUserAuthData>;

type TAuthServiceMethods = {
  createSession: TCreateSession;
};

interface TAuthServiceArgs {
  authHandlers: TAuthServiceMethods;
  userHandlers: TUserMethods;
}

export type TAuthService = (handlers: TAuthServiceArgs) => {
  '/login': (userId: string) => any;
};
