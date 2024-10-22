import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contact/AuthProvider';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        logout().then(() => {
            // Sign-out successful.
            alert("LogOut successful")
            navigate(from, { replace: true })
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button onClick={handleLogout} className='text-white bg-blue-600 hover:bg-black px-8 py-2 rounded' >Logout</button>
        </div>
    )
}

export default Logout