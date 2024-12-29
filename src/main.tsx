import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import './index.css';
import BatteryPage from './pages/BatteryPage.tsx';
import OilPage from './pages/OilPage.tsx';
import SparkPlugPage from './pages/SparkPlugPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/batteries",
    element: <BatteryPage />,
  },
  {
    path: "/oils",
    element: <OilPage />,
  },
  {
    path: "/sparkplugs",
    element: <SparkPlugPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
