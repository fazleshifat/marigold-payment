import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState("all");


    // console.log(defaultUserName, userImageURL)

    const [balance, setBalance] = useState(() => {
        const storedBalance = localStorage.getItem("userBalance");
        return storedBalance ? parseFloat(storedBalance) : 10000;
    });

    useEffect(() => {
        localStorage.setItem("userBalance", balance);
    }, [balance]);


    // account with Email 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const userUpdate = (updateData) => {
    //     setLoading(true);
    //     return updateProfile(auth.currentUser, updateData);
    // }

    const userPasswordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
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

                // console.log(user)
                // console.log(user.displayName)
                // console.log(user.email)
                // console.log(user.photoURL)

            } else {
                setUser(null);
            }
            setLoading(false);
        });


        return () => unsubscribe();
    }, [])

    const authData = {
        auth,
        user,
        setUser,
        selectedCategory,
        setSelectedCategory,
        setBalance,
        balance,
        loading,
        setLoading,
        createUser,
        userSignIn,
        googleSignIn,
        // userUpdate,
        userPasswordReset,
        userSignOut
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;