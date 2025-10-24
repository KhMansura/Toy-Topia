import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase";

export const AuthContext = createContext(null);



const AuthProviders = ({ children }) => {
    
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //  Register new user
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Login with email/password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Reset password
const resetPassword = (email) => {
  setLoading(true);
  return sendPasswordResetEmail(auth, email)
    .finally(() => setLoading(false));
};


  //  Google sign-in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
   const updateUserProfile = async (profile) => {
    await updateProfile(auth.currentUser, profile);
    // Update local context state immediately
    setUser((prevUser) => ({
      ...prevUser,
      displayName: profile.displayName ?? prevUser?.displayName,
      photoURL: profile.photoURL ?? prevUser?.photoURL,
    }));
  };

  //  Persist user info after reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    user,
    loading,
    register,
    login,
    googleLogin,
    logout,
    updateUserProfile,
    resetPassword, 
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
