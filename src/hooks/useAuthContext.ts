import { useContext } from 'react';
import { AuthContextProps, AuthContext } from '../context';

export default function useAuthContext() {
  return useContext<AuthContextProps>(AuthContext);
}
