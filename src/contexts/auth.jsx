import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext({
  isLoggedIn: false
});
export function AuthProvider({
  children
}) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setUserProfile = async userDetails => {
    setUser(userDetails);
    setIsLoggedIn(!!userDetails.id);
  };
  const logout = () => {
    setUser(null);
  };
  const value = {
    user,
    isLoggedIn,
    setUserProfile,
    logout
  };
  return <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>;
}
export function useAuth() {
  return useContext(AuthContext);
}
export default AuthProvider;