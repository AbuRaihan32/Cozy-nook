import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PuffLoader} from 'react-spinners'

const Root = () => {
    const navigation = useNavigation()

    return (
        <div style={{fontFamily: 'Manrope, sans-serif'}} className="max-w-7xl mx-auto">
            <div className="mt-3 md:mt-5">
                <Navbar navigation={navigation}></Navbar>
            </div>
            {
                navigation.state === 'loading' ? <div className="w-full h-96 flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div> : <Outlet></Outlet>
            }
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;