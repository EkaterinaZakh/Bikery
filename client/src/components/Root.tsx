import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Root(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
