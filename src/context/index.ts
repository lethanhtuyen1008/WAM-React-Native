import { createContext } from 'react';
import { AuthProvider } from '../core';

export type AuthContextProps = {
  provider: AuthProvider;
};

export const AuthContext = createContext<AuthContextProps>({} as any);
