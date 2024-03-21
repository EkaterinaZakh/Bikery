import React from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage'
import NavBar from './components/ui/Navbar';
import LoginPage from './components/pages/LoginPage';
import PrivateRoute from './components/HOC/PrivateRoute';
import SignupPage from './components/pages/SignupPage';
import Root from './components/Root';

function App(): JSX.Element {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: (
        <>
          <h1>Ошибка</h1>
          <Link to="/">На главную</Link>
        </>
      ),
      children: [
        { path: '/', element: <MainPage /> },
 
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
