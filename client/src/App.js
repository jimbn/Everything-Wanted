import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './routes/Root';
import Test1 from './routes/Test1';
import Test2 from './routes/Test2';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [

      ]
    },
    {
      path: '/Test1',
      element: <Test1/>,
    },
    {
      path: '/Test2',
      element: <Test2/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
