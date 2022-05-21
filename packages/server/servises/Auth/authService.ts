import * as authHandlers from './authHandlers';
import { userHandlers } from '@notepad/user-servise';
import type { TAuthService, TAuthServiceArgs } from './types';

export const authService: TAuthService = (handlers) => ({
  '/login': async (body: any) => {
    if (!body || !body?.email || !body?.password) {
      const error = new Error();
      return error;
    }

    const { email, password } = body;

    const user = handlers.userHandlers.getUser({ body: { email, password } });

    const session = handlers.authHandlers.createSession();
  },
});
