import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './routes/Root';
import Cooking from './routes/Cooking';
import Gaming from './routes/Gaming';
import Header from './globalComponents/Header';
import Footer from './globalComponents/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
      ]
    },
    {
      path: '/Cooking',
      element: <Cooking/>,
    },
    {
      path: '/Gaming',
      element: <Gaming/>,
    },
  ]);

  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
