import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { RiEye2Line } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const NavLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'border border-orange-600 hover:bg-orange-200 rounded-md py-[7px] px-3' : 'py-[6px] px-3'} to={'/'}>Home</NavLink></li>

        {
            user && <li><NavLink className={({ isActive }) => isActive ? 'border border-orange-600 hover:bg-orange-200 rounded-md py-[7px] px-3' : 'py-[6px] px-3'} to={'/update'}>Update Profile</NavLink></li>
        }

        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>


    const signOutBtnHandler = () => {
        logOutUser()
            .then(() => {
                console.log('Sign Out Successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <Helmet>
                <title>CozyNook | Login</title>
            </Helmet>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">CozyN <span className="text-3xl flex -mr-2 -ml-2 font-extrabold text-orange-600"><RiEye2Line></RiEye2Line><RiEye2Line className="-ml-[2px]"></RiEye2Line></span> K</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-5 items-center font-semibold">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <div title={`${user.displayName}`} className="avatar mr-5">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL ? user.photoURL : '/public/icons8-user.gif'} />
                                </div>
                            </div>
                            <button onClick={signOutBtnHandler} className="btn bg-orange-600 rounded-full text-white px-6 hover:bg-orange-700">Sign Out</button>
                        </> :
                        <Link to={'/login'} className="btn bg-orange-600 rounded-full text-white px-6 hover:bg-orange-700">Sign In</Link>
                }



            </div>
        </div>
    );
};

export default Navbar;