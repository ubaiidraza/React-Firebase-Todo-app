import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react';
import { auth } from "../config/firebase/firebaseconfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage); // Errors can be logged for debugging
            });
        
        email.current.value = '';
        password.current.value = '';
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='text-center bg-white p-8 rounded shadow-md'>
                <h1 className='text-3xl font-semibold'>Login</h1>
                <form onSubmit={loginUser} className='mt-5'>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input w-full p-2 border border-gray-300 rounded mt-3"
                        ref={email}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input w-full p-2 border border-gray-300 rounded mt-3"
                        ref={password}
                    />
                    <br />
                    <button className="w-full mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                </form>
                <h3 className='mt-3'>
                    <Link to="/Register" className="text-blue-500 hover:underline">Don't have an account?</Link>
                </h3>
            </div>
        </div>
    );
};

export default Login;
