import React, { useRef } from 'react';
import { auth } from "../config"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; // Correct import

function Register() {
    const userNameValue = useRef();
    const emailValue = useRef();
    const passwordValue = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, emailValue.current.value, passwordValue.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <>
            <div>
                <h1 className='text-3xl text-center font-bold mt-3'>Register User</h1>
            </div>

            <form onSubmit={handleSubmit} className='w-[80%] sm:w-[30%] md:w-[40%] lg:w-[30%] items-center mt-[10vh] m-0 m-auto'>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    {/* SVG Icon */}
                    <input type="text" className="grow" placeholder="Username" ref={userNameValue} />
                </label>

                <label className="input input-bordered flex items-center gap-2 mt-5">
                    {/* SVG Icon */}
                    <input type="text" className="grow" placeholder="Email" ref={emailValue} />
                </label>

                <label className="input input-bordered flex items-center gap-2 mt-5">
                    {/* SVG Icon */}
                    <input type="password" className="grow" placeholder="Password" ref={passwordValue} />
                </label>

                <div className='text-center mt-5'>
                    <button type="submit" className="btn btn-outline btn-info">REGISTER</button>
                </div>
            </form>
        </>
    );
}

export default Register;
