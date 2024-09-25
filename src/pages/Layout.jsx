import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navber />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
