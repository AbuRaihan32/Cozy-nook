import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState([]);


    // create User 
    const createUserByEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log Out User 
    const logOutUser = () => {
        return signOut(auth);
    }

    // Update User Profile
    const updateUserPro = (FullName, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: FullName, photoURL: image
          })
    }

    // User Observer

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])




    const authInfo = {
        user,
        createUserByEmail,
        loginUser,
        logOutUser,
        updateUserPro
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node
}
export default AuthProviders;