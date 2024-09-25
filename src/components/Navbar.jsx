import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition duration-300">
            Home
          </Link>
          <Link to="login" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition duration-300">
            Login
          </Link>
          <Link to="register" className="text-white hover:bg-blue-500 rounded px-3 py-2 transition duration-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
