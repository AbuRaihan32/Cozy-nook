import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { RiEye2Line } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { PuffLoader } from 'react-spinners'


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const NavLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'border border-orange-600 hover:bg-orange-200 rounded-md py-[7px] px-3' : 'py-[6px] px-3'} to={'/'}>Home</NavLink></li>

        {
            user && <li><NavLink className={({ isActive }) => isActive ? 'border border-orange-600 hover:bg-orange-200 rounded-md py-[7px] px-3' : 'py-[6px] px-3'} to={'/update'}>Update Profile</NavLink></li>
        }

        {
            user && <li><NavLink className={({ isActive }) => isActive ? 'border border-orange-600 hover:bg-orange-200 rounded-md py-[7px] px-3' : 'py-[6px] px-3'} to={'/agents'}>Our Agents</NavLink></li>
        }

        <li><NavLink className={({ isActive }) => isActive ? 'border border-orange-600 hover:bg-orange-200 rounded-md py-[7px] px-3' : 'py-[6px] px-3'} to={'/feedback'}>Feedback Us</NavLink></li>

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
        <div className="navbar bg-base-100 mb-5">
            <Helmet>
                <title>CozyNook | Login</title>
            </Helmet>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu z-30 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                        <li>
                            <div className="">

                                {
                                    user ?
                                        <>
                                            <button onClick={signOutBtnHandler} className="flex gap-3">
                                                <BiLogOutCircle className="text-xl"></BiLogOutCircle> Sign Out
                                            </button>
                                        </> :
                                        <Link to={'/login'} className="flex gap-3">
                                            <BiLogInCircle className="text-xl"></BiLogInCircle>Login
                                        </Link>
                                }

                            </div>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl md:text-3xl font-bold">CozyN <span className="text-3xl flex -mr-2 -ml-2 font-extrabold text-orange-600"><RiEye2Line></RiEye2Line><RiEye2Line className="-ml-[2px]"></RiEye2Line></span> K</a>
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
                            <div className="relative">
                                <div title={`${user.displayName}`} className="avatar mr-5 z-20">
                                    <div className="w-10 rounded-full ring ring-orange-600 ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL ? user.photoURL : '/public/icons8-user.gif'} />
                                    </div>
                                </div>
                                <div className="absolute -top-[15px] right-[5px] z-10">
                                    <PuffLoader color="orange" size={70}></PuffLoader>
                                </div>
                            </div>

                            <button onClick={signOutBtnHandler} className="relative hidden  border border-orange-600 md:inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                                <span className="h-48 w-[90%] rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="flex items-center gap-2 relative w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white"> <BiLogOutCircle className="text-xl"></BiLogOutCircle> Sign Out</span>
                            </button>
                        </> :
                        <Link to={'/login'} className="relative border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                            <span className="h-48 w-full rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="flex items-center justify-center gap-2 relative text-center w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white"> <BiLogInCircle className="text-xl"></BiLogInCircle> <span className="hidden md:inline">Sign In / Register</span></span>
                        </Link>
                }



            </div>
        </div>
    );
};

export default Navbar;