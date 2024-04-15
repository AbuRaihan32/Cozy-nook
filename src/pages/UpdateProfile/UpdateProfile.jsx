import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";

const UpdateProfile = () => {
    const [isEdit, setIsEdit] = useState(false);

    const { user } = useContext(AuthContext);

    return (
        <div className="w-full mt-11">
            <Helmet>
                <title>Cozy | UpdateProfile</title>
            </Helmet>
            <div className="card shrink-0 w-[50%] mx-auto shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center pt-7 font-semibold">Your Information</h1>
                <div>
                    
                </div>
                <form className="card-body w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        {
                            isEdit ? <input type="text" placeholder="" defaultValue={user.displayName} className="input input-bordered" /> :
                                <p className="input input-bordered flex items-center pl-7">{user.displayName}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        {
                            isEdit ? <input type="email" placeholder="" defaultValue={user.email} className="input input-bordered" /> :
                                <p className="input input-bordered flex items-center pl-7">{user.email}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        {
                            isEdit ? <input type="text" placeholder="" defaultValue={user.photoURL} className="input input-bordered" /> :
                                <p className="input input-bordered flex items-center pl-7">{user.photoURL}</p>
                        }
                    </div>
                    <div className="form-control mt-6 w-[50%] mx-auto">
                        <button className="py-3 border border-orange-600 rounded-lg">Edit Profile</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;