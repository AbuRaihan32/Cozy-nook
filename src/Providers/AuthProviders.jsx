import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);


    // create User 
    const createUserByEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log in With google
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // log in With github
    const githubLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // log in With github
    const facebookLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // log Out User 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }


    // User Observer

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [update])




    const authInfo = {
        user,
        createUserByEmail,
        loginUser,
        logOutUser,
        loading,
        setUpdate,
        update,
        googleLogIn,
        githubLogIn,
        facebookLogIn
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