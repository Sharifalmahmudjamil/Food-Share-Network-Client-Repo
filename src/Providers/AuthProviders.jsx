/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";


const auth = getAuth(app);

const googleProvider= new GoogleAuthProvider();

export const AuthContext= createContext(null);

const AuthProviders = ({children}) => {

    const[user,setUser]=useState();
    const [loading,setLoading]=useState(true);

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const updateUser = (name,photo)=>{
return updateProfile (auth.currentUser,{
displayName : name , photoURL : photo
})
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
              console.log("user in the auth state changed",currentUser);
              const userEmail= currentUser?.email|| user?.email;
              const loggedUser= { email: userEmail}
              setUser(currentUser);
              setLoading(false);
            //   if user exsits token
            if(currentUser){
                axios.post( 'http://localhost:5000/jwt',loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }

          })
          return ()=>{
              unsubscribe();
          }
      },[user?.email])

    const userInfo={
        user,
        loading,
        googleSignIn,
        createUser,
        signIn,
        logout,
        updateUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;