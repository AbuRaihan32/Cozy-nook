import { Link } from "react-router-dom";
import { FaGoogle, FaTwitter, FaGithub, FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Login = () => {
    const Navigate = useNavigate()
    const [show, setShow] = useState(false);
    const location = useLocation();

    const { loginUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { email, password } = data;

        loginUser(email, password)
            .then(() => {
                Navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto bg-slate-100 mt-8">
            <Helmet>
                <title>Cozy | Login</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="Email" className="block text-[18px]">Email</label>
                    <input type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-orange-500 outline-none" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 font-bold">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block text-[18px]">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-orange-500 outline-none" {...register("password", { required: true })} />

                    <div onClick={() => setShow(!show)} className="absolute right-5 top-[35px] text-xl">
                        {
                            show ? <FaEye></FaEye> : <RiEyeCloseFill></RiEyeCloseFill>
                        }
                    </div>


                    {errors.password && <span className="text-red-500 font-bold">This field is required</span>}

                    <div className="flex justify-end text-[14] font-semibold text-blue-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-white bg-orange-500">Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm ">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button aria-label="Log in with Google" className="p-3 rounded-sm">
                    <FaGoogle></FaGoogle>
                </button>
                <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                    <FaTwitter></FaTwitter>
                </button>
                <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <FaGithub></FaGithub>
                </button>
            </div>
            <p className="text-[16] text-center sm:px-6 ">Do Not have an account?
                <Link to={'/register'} className="underline text-blue-600"> Register </Link>
            </p>
        </div>
    );
};

export default Login;