import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from "react-router-dom";


const PrivateRouts = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>

};

PrivateRouts.propTypes = {
    children: PropTypes.node
}

export default PrivateRouts;