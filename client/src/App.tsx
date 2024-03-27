import React, { useEffect } from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import FestPage from './components/pages/FestPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { refreshAuth } from './redux/slices/auth/thunks';
import Loader from './components/HOC/Loader';
import RacesPage from './components/pages/RacesPage';
import getAllRaceThunk from './redux/slices/race/thunk';
import getAllCatsThunk from './redux/slices/cats/thunk';
import ShopPage from './components/pages/ShopPage';
import { getAllProdsThunk } from './redux/slices/prod/thunk';
import { getAllFestsThunk } from './redux/slices/fest/thunk';
import CartPage from './components/pages/CartPage';
import WishListPage from './components/pages/WishListPage';
import NotFoundPage from './components/pages/NotFoundPage';
import { getAllCommitsThunk } from './redux/slices/comments/thunk';
import { getAllFestsCommentsThunk } from './redux/slices/comments/festthunk';
import { getAllCartThunk } from './redux/slices/cart/thunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.user.status);

  useEffect(() => {
    void dispatch(getAllRaceThunk());
    void dispatch(getAllProdsThunk());
    void dispatch(refreshAuth());
    void dispatch(getAllCatsThunk());
    void dispatch(getAllFestsThunk());
    void dispatch(getAllCommitsThunk());
    void dispatch(getAllFestsCommentsThunk());
    void dispatch(getAllCartThunk());
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
        { path: '/shop', element: <ShopPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/wish', element: <WishListPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
