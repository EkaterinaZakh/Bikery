import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/Navbar';

export default function Root(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
