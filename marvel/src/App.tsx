import React from 'react'
import { useRoutes } from "react-router-dom"
import Home from './pages/Home';
import HeaderPagesSection from './pagesSections/HeaderPagesSection';

function App() {


 let routes = useRoutes([
      {
        path: "/",
        element: <Home />,
        // children: [
        //   {
        //     path: "messages",
        //     element: <DashboardMessages />,
        //   },
        //   { path: "tasks", element: <DashboardTasks /> },
        // ],
      }
    ]);
  
  return (
  <>
    <HeaderPagesSection/>
      {routes}
  </>
      )

}

export default App;
