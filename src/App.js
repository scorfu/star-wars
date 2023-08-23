import { createBrowserRouter, RouterProvider, Redirect } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Movies from './Pages/Movies';
import NotFound from './Pages/NotFound';

import './App.css';
import Characters from './Pages/Characters';

function App() {
  const router = createBrowserRouter([
    {
      path: '/homepage',
      element: <HomePage />
    },
    {
      path: '/movies',
      element: <Movies />
    },
    {
      path: '/characters',
      element: <Characters />
    },
    {
      path: '*',
      element: <NotFound />
    },
  ])


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
