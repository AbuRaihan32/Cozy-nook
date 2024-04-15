import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEdit } from "react-icons/fa";
import auth from "../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const { user, setUpdate, update } = useContext(AuthContext);

    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(user.displayName)
    const [photo, setPhotoURL] = useState(user.photoURL)
    


    const HandleSaveChange = () =>{
        setIsEdit(false)
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        .then(()=>{
            setUpdate(!update)
            // alert('Profile Updated Successfully')
        })
        .catch(error =>{
            console.error(error)
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
                    isEdit || <div onClick={() => { setIsEdit(true) }} title="Edit" className="absolute right-7 top-6 text-2xl font-semibold border border-orange-600 p-2 rounded-md cursor-pointer">
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
                            isEdit ? <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="" defaultValue={user.displayName} className="input input-bordered pl-7 focus" /> :
                                <p className="input input-bordered flex items-center pl-7">{user.displayName}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        {
                            isEdit ? <input onChange={(e)=>{setPhotoURL(e.target.value)}} type="text" placeholder="" defaultValue={user.photoURL ? user.photoURL : 'No Photo URL'} className="input input-bordered pl-7" /> :
                                <p className="input input-bordered flex items-center p-3 pl-7">{user.photoURL ? user.photoURL : 'No Photo URL'}</p>
                        }
                    </div>
                    {
                        isEdit && <div onClick={HandleSaveChange} className="form-control mt-6 w-[50%] mx-auto">
                            <button className="py-3 border border-orange-600 rounded-lg">Save Change</button>
                        </div>
                    }
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;