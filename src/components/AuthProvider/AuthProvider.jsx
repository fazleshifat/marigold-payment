import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userImageURL, setUserImageURL] = useState(null);
    const [loading, setLoading] = useState(true); // initially true

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setUser(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setUser(false);
        return signOut(auth);
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                // console.log(user.displayName);
                setUser(user);
                setLoading(false);
                setUserImageURL(userImageURL);
            }
            else {
                console.log('any user not logged in');
            }
        })
    }, [])

    const authData = {
        user,
        setUser,
        loading,
        userImageURL,
        setUserImageURL,
        createUser,
        userSignIn,
        userSignOut
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;