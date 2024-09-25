import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react';
import { auth } from "../config/firebase/firebaseconfig";

const Register = () => {
    const email = useRef();
    const password = useRef();

    const registerUser = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        
        email.current.value = '';
        password.current.value = '';
    };

    return (
        <>
            <div className='flex items-center justify-center h-screen bg-gray-100'>
                <div className='text-center bg-white p-8 rounded shadow-md'>
                    <h1 className='mt-5 text-3xl font-semibold'>Register</h1>
                    <form onSubmit={registerUser}>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="mt-5 border border-gray-300 rounded p-2 w-[20rem]"
                            ref={email}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="mt-5 border border-gray-300 rounded p-2 w-[20rem]"
                            ref={password}
                        />
                        <br />
                        <button className="bg-blue-500 text-white mt-5 p-2 rounded hover:bg-blue-600">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
