import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Statistic from "./Components/Statistic/Statistic";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Form from "./Components/Form/Form";
import App from "./App";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/category.json'),
      },
      // {
      //   path: "statistic",
      //   element: <Statistic/>,
      // },
      {
        path: "appliedjobs",
        element: <AppliedJobs/>,
      },
      {
        path: "details",
        element: <JobDetails/>,
      },
      {
        path: "details/:_id",
        element: <JobDetails />,
        // loader: () => fetch('http://192.168.11.77:5195/api/JobDetails/GetJobs'),
        // loader: ({ params }) => fetch(`company.json/${params.id}`),
        loader:()=>fetch('https://joblessapi-1.onrender.com/getjobs')
      },
      {
        path:"Login",
        element: <Login/>,
      },
      {
        path:"Form",
        element:<Form />
      },
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);