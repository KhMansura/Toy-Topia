
// import React, { createContext, useEffect, useState } from "react";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signOut,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   updateProfile,
//   sendPasswordResetEmail,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import app from "../firebase"; // your firebase.js file (you said you have it)

// export const AuthContext = createContext(null);

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProviders = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register (create user + update profile)
//   const register = async (name, email, password, photoURL) => {
//     setLoading(true);
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     if (photoURL || name) {
//       await updateProfile(res.user, { displayName: name || "", photoURL: photoURL || "" });
//     }
//     return res;
//   };

//   const login = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleLogin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logout = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const resetPassword = (email) => {
//     setLoading(true);
//     return sendPasswordResetEmail(auth, email);
//   };

//   const updateUserProfile = (profile) => {
//     // profile: { displayName, photoURL }
//     return updateProfile(auth.currentUser, profile);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     logout,
//     googleLogin,
//     resetPassword,
//     updateUserProfile,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProviders;
// src/providers/AuthProviders.jsx
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
  const [loading, setLoading] = useState(true); // 🔄 Loader state

  const googleProvider = new GoogleAuthProvider();

  // 🔹 Register new user
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Login with email/password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Reset password (real Firebase implementation)
const resetPassword = (email) => {
  setLoading(true);
  return sendPasswordResetEmail(auth, email)
    .finally(() => setLoading(false));
};


  // 🔹 Google sign-in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 🔹 Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 🔹 Update Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // 🔹 Persist user info after reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // stop loader when done
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
