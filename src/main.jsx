import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Pages/Layout'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NormalMap from './Components/NormalMap'
import HeatMap from './Components/HeatMap'
import FloorMap from './Components/FloorMap'
import Dashboard from './Components/Dasboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        index:true,
        element: <Dashboard/>,
      },
      {
        path: "/normalmap",
        element: <NormalMap />,
      },
      {
        path: "/heatmap",
        element: <HeatMap />,
      },
      {
        path: "/floormap",
        element: <FloorMap/>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
