import React, { useEffect } from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
// import NavBar from './components/ui/Navbar';
// import LoginPage from './components/pages/LoginPage';
// import PrivateRoute from './components/HOC/PrivateRoute';
// import SignupPage from './components/pages/SignupPage';
import Root from './components/Root';
import FestPage from './components/pages/FestPage';
import getAllFestsThunk from './redux/slices/fest/thunk';
import { useAppDispatch } from './redux/hooks';

function App(): JSX.Element {
  // return (
  //   <div className="App">
  //     <NavBar/>
  //     <h1>Hello, world!</h1>
  //   </div>
  // );

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllFestsThunk());
  }, []);

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
        { path: '/fests', element: <FestPage /> },

        // { path: '/login', element: <LoginPage /> },
        // { path: '/signup', element: <SignupPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
