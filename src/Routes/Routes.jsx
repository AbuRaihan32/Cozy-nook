import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouts from "../PrivateRouts/PrivateRouts";
import EstateDetails from "../pages/EstateDetails";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Agents from "../pages/Agents/Agents";
import FeedBack from "../pages/Feedback/Feedback";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/info.json')
            },
            {
                path: '/details/:id',
                element: <PrivateRouts><EstateDetails></EstateDetails></PrivateRouts>,
                loader: ()=> fetch('/info.json')
            },
            {
                path: '/update',
                element: <PrivateRouts><UpdateProfile></UpdateProfile></PrivateRouts>
            },
            {
                path: '/agents',
                element: <PrivateRouts><Agents></Agents></PrivateRouts>,
                loader: ()=> fetch('/agents.json')
            },
            {
                path: '/feedback',
                element: <FeedBack></FeedBack>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;