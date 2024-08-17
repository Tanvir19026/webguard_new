/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider,signOut, getAuth,signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup,createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider= ({ children })=>{
    const googleProvider = new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
      };
      const githubLogin=()=>{
        return signInWithPopup(auth,githubProvider)
      }
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

      const logout = () => {
        return signOut(auth).then(() => setUser(null));
      };
      const authInfo={user, googleLogin, githubLogin,createUser, signIn, logout, loading};

      useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
          } else {
            setLoading(false);
          }
        });
        return () => {
          return unscubcribe();
        };
      }, []);


   
     
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};


export default AuthProvider;