import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import AllMoviesPage from './Pages/AllMoviesPage';
import AllCharacters from './Pages/AllCharacters';
import AllPlanets from './Pages/AllPlanets';
import AllSpecies from './Pages/AllSpecies';
import AllStarShips from './Pages/AllStarships';
import AllVechicles from './Pages/AllVehicles';
import Favorites from './Pages/Favorites';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout/Layout';
// import { logout } from './features/starWarsAuthSlice';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles/App.css';

const PrivateRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.token);
  return (
    isLoggedIn ? <Outlet /> : <Navigate to='/auth' /> //<Outlet/> lets us pass the children down
  )
};

function App() {
  // const isLoggedIn = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const timer = setTimeout(()=> dispatch(logout()), 1000*60*1); //after 45 minutes erase all local storage to logout
  //   console.log(timer);

  //   return () => {
  //     // console.log('Iclean');
  //     clearTimeout(timer)}

  // }, [isLoggedIn])

  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<HomePage />} path='/' />
              <Route element={<HomePage />} path='/homepage' />
              <Route element={<AllMoviesPage />} path='/movies' />
              <Route element={<AllCharacters />} path='/characters' />
              <Route element={<AllSpecies />} path='/species' />
              <Route element={<AllPlanets />} path='/planets' />
              <Route element={<AllStarShips />} path='/starships' />
              <Route element={<AllVechicles />} path='/vehicles' />
              <Route element={<Favorites />} path='/favorites' />
              <Route element={<NotFound />} path='*' />
            </Route>
            <Route element={<AuthPage />} path='/auth' />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )

  //INITIAL ROUTER /// INITIAL ROUTER /// INITIAL ROUTER //// / //// / / / / / / / / / / / / / // / / 
  //  const isLoggedIn = useSelector((state) => state.auth.token);
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: isLoggedIn === null ? <AuthPage replace/> : <HomePage/>
  //   },
  //   {
  //     path: '/homepage',
  //     element: isLoggedIn === null ? <AuthPage/> : <HomePage />
  //   },
  //   {
  //     path: '/auth',
  //     element: isLoggedIn ? <HomePage/> : <AuthPage/>
  //   },
  //   {
  //     path: '/movies',
  //     element: isLoggedIn === null ? <AuthPage/> : <Movies />
  //   },
  //   {
  //     path: '/characters',
  //     element: isLoggedIn === null ? <AuthPage/> : <AllCharacters />
  //   },
  //   {
  //     path: '/species',
  //     element: isLoggedIn === null ? <AuthPage/> : <AllSpecies />
  //   },
  //   {
  //     path: '/planets',
  //     element: isLoggedIn === null ? <AuthPage/> : <AllPlanets />
  //   },
  //   {
  //     path: '/starships',
  //     element: isLoggedIn === null ? <AuthPage/> : <AllStarShips />
  //   },
  //   {
  //     path: '/vehicles',
  //     element: isLoggedIn === null ? <AuthPage/> : <AllVechicles />
  //   },
  //   {
  //     path: '/favorites',
  //     element: isLoggedIn === null ? <AuthPage/> : <Favorites />
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />
  //   },
  // ])

  // return (
  //   <div className="App">

  //     <RouterProvider router={router} />

  //   </div>
  // );
  //INITIAL ROUTER /// INITIAL ROUTER /// INITIAL ROUTER //// / //// / / / / / / / / / / / / / // / / 
}

export default App;
