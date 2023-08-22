import { createContext } from 'react';

const AuthContext = createContext({
  email: '',
  login(email) {},
  logout() {},
});
AuthContext.displayName = 'MusuAtentifikacija';
export default AuthContext;
