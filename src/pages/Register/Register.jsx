import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { FaGoogle, FaTwitter, FaGithub, FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form"
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';

const Register = () => {
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();

    const { createUserByEmail, logOutUser } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        const { FullName, email, password, image } = data;

        // create User
        createUserByEmail(email, password)
            .then(result => {
                // Update User Profile
                updateProfile(result.user, {
                    displayName: FullName, photoURL: image
                })

                // logOut User 
                logOutUser()
                    .then(() => { })
                    .catch(() => { })
                Navigate('/login')

                toast.success('User Created Successfully! Please LogIn For Continue.')
            })
            .catch(error => {
                toast.error(error.message)
            })

    }


    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto bg-slate-100 mt-8">
            <Helmet>
                <title>Cozy | Register</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Create Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-[18px]">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-orange-500 outline-none" {...register("FullName", { required: true })} />
                    {errors.FullName && <span className="text-red-500 font-bold">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="Email" className="block text-[18px]">Email</label>
                    <input type="email" name="email" id="Email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-orange-500 outline-none" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 font-bold">This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="image" className="block text-[18px]">Photo</label>
                    <input type="text" name="image" id="image" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-orange-500 outline-none" {...register("image")} />

                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block text-[18px]">Password</label>
                    <input type={show? 'text' : 'password'} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md border border-orange-500 outline-none" {...register("password", { required: true })} />
                    
                    <div onClick={() => setShow(!show)} className="absolute right-5 top-[35px] text-xl">
                        {
                            show ? <FaEye></FaEye> : <RiEyeCloseFill></RiEyeCloseFill>
                        }
                    </div>
                    {errors.password && <span className="text-red-500 font-bold">This field is required</span>}
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-100 bg-orange-500 font-bold btn hover:bg-orange-700">Register</button>
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
            <p className="text-[16] text-center sm:px-6 ">Already Have An Account?
                <Link to={'/login'} rel="noopener noreferrer" href="#" className="underline text-blue-600"> Login </Link>
            </p>
        </div>
    );
};

export default Register;