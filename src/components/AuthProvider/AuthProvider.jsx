import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userImageURL, setUserImageURL] = useState(null);
    const [loading, setLoading] = useState(true); // initially true


    // account with Email 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Account with Google

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user.providerData)
            } else {
                setUser(null);
            }
            setLoading(false);
        });


        return () => unsubscribe();
    }, [])

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        userImageURL,
        setUserImageURL,
        createUser,
        userSignIn,
        googleSignIn,
        userSignOut
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;