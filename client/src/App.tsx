import React, { useEffect } from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import FestPage from './components/pages/FestPage';
import getAllFestsThunk from './redux/slices/fest/thunk';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import PrivateRoute from './components/HOC/PrivateRoute';
import { refreshAuth } from './redux/slices/auth/thunks';
import Loader from './components/HOC/Loader';
import RacesPage from './components/pages/RacesPage';
import getAllRaceThunk from './redux/slices/race/thunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.user.status);

  useEffect(() => {
    void dispatch(getAllFestsThunk());
    void dispatch(getAllRaceThunk());
    void dispatch(refreshAuth());
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
        { path: '/races', element: <RacesPage /> },
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
