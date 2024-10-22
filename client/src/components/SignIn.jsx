import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contact/AuthProvider'
import GoogleLogo from '../assets/google-logo.svg'

const SignIn = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('User successfully Logged in')
            navigate(from, { replace: true })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });

        // createUser(email, password).then((userCredential) => {
        //     // Signed up 
        //     const user = userCredential.user;
        //     alert('User successfully signed up')
        //     navigate(from, { replace: true })
        //     // ...
        // })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setError(errorMessage);

        //         // ..
        //     });
    }
    // login with google  OR one tap login
    const handleRegister = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert('User successfully signed up')
            navigate(from, { replace: true })
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);

                // ..
            });
    }
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login Here</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" placeholder="Email" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />

                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" placeholder="Password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                </div>

                                {
                                    error ? <p className='text-red-600 text-base'>Email or Password in not correct</p> : ""
                                }

                                <p>If you haven't an account. Please <Link to='/signup' className='text-blue-600 underline'>Sign Up</Link></p>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">Login </button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div className='flex items-center flex-col w-full mt-2 gap-2'>
                            <button onClick={handleRegister} className='block'><img src={GoogleLogo} alt="" className='w-10 h-10 inline-block' /> Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn