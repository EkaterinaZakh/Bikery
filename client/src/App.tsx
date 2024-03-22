import React, { useEffect } from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import FestPage from './components/pages/FestPage';
import getAllFestsThunk from './redux/slices/fest/thunk';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import LoginPage from './components/pages/auth/LoginPage';
import SignupPage from './components/pages/auth/SignupPage';
import PrivateRoute from './components/HOC/PrivateRoute';
import { refreshAuth } from './redux/slices/auth/thunks';
import Loader from './components/HOC/Loader';
import ShopPage from './components/pages/ShopPage';
import getAllProdsThunk from './redux/slices/prod/thunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.user.status);

  useEffect(() => {
    void dispatch(getAllProdsThunk());
    void dispatch(refreshAuth());
    void dispatch(getAllFestsThunk());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Loader loading={status === 'unknown'}>
          <Root />
        </Loader>
      ),
      errorElement: (
        <>
          <h1>Ошибка</h1>
          <Link to="/">На главную</Link>
        </>
      ),
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/fests', element: <FestPage /> },
        { path: '/shop', element: <ShopPage /> },
        {
          element: <PrivateRoute isAllowed={status === 'guest'} redirect="/" />,
          children: [
            { path: '/login', element: <LoginPage /> },
            { path: '/signup', element: <SignupPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
