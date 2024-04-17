import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEdit } from "react-icons/fa";
import auth from "../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


const UpdateProfile = () => {
    const { user, setUpdate, update } = useContext(AuthContext);

    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(user.displayName)
    const [photo, setPhotoURL] = useState(user.photoURL)



    const HandleSaveChange = () => {
        setIsEdit(false)
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                setUpdate(!update)
                toast.success('Profile Updated Successfully')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className="w-full mt-11">
            <Helmet>
                <title>Cozy | UpdateProfile</title>
            </Helmet>
            <div className="relative card shrink-0 w-[90%] md:w-[70%] lg:w-[50%] mx-auto shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center pt-7 font-semibold">Your Information</h1>
                {
                    isEdit || <div onClick={() => { setIsEdit(true) }} title="Edit" className="absolute right-7 top-6 text-2xl font-semibold border border-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-md cursor-pointer">
                        <FaEdit></FaEdit>
                    </div>
                }
                <form className="card-body w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email (Not Editable) </span>
                        </label>

                        <p className="input input-bordered flex items-center pl-7">{user.email}</p>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        {
                            isEdit ? <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="" defaultValue={user.displayName} className="input input-bordered pl-7 focus" /> :
                                <p className="input input-bordered flex items-center pl-7">{user.displayName}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        {
                            isEdit ? <input onChange={(e) => { setPhotoURL(e.target.value) }} type="text" placeholder="" defaultValue={user.photoURL ? user.photoURL : 'No Photo URL'} className="input input-bordered pl-7" /> :
                                <p className="input input-bordered flex items-center p-3 pl-7">{user.photoURL ? user.photoURL : 'No Photo URL'}</p>
                        }
                    </div>
                    {
                        isEdit && <div onClick={HandleSaveChange} className="form-control mt-6 w-[50%] mx-auto">
                            <Link className="relative w-[70%] mx-auto border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                                <span className="h-48 w-full rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative text-center w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white">Save Changes</span>
                            </Link>
                        </div>
                    }
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;