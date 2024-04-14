import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
    const {user, logOutUser } = useContext(AuthContext);

    console.log(user);

    const NavLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>


    const signOutBtnHandler = () => {
        logOutUser()
            .then(()=>{
                console.log('Sign Out Successfully');
            })
            .catch(error =>{
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">HOME SOLUTIONS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-orange-600 rounded-full text-white px-6 hover:bg-orange-700">Sign In</a>

                <button onClick={signOutBtnHandler} className="btn bg-orange-600 rounded-full text-white px-6 hover:bg-orange-700">Sign Out</button>
            </div>
        </div>
    );
};

export default Navbar;