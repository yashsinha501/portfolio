import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from "./components/Home";
import Skills from "./components/Skills"
import Work from "./components/Work"
import Internships from "./components/Internships"
import Education from "./components/Education"
import Contact from "./components/Contact"
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './index.css';

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Home />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/works",
        element: <Work />,
      },
      {
        path: "/internships",
        element: <Internships />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouter} /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
