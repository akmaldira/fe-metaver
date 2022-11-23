import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Profile from './Pages/Profile';
import "./index.css";
import Sidebar from "./Components/Sidebar";
import Whitelist from "./Pages/Whitelist";
import Calender from "./Pages/Calender";
import Setting from "./Pages/Setting";
import Support from "./Pages/Support";

const AppLayout = () => (
  <div className="applayout">
    <Sidebar />
    <div className="main-content">
      <Navbar />
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/whitelist",
        element: <Whitelist />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);