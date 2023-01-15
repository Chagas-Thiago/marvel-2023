import React from 'react'
import { useRoutes } from "react-router-dom"
import Home from './pages/Home';
import CharIdPage from './pages/CharIdPage';
import HeaderPagesSection from './pagesSections/HeaderPagesSection';

function App() {


 let routes = useRoutes([
   { path: "/", element: <Home /> },
   { path: "/charId", element: <CharIdPage /> },
 ]);
  
  return (
  <>
    <HeaderPagesSection/>
      {routes}
  </>
      )

}

export default App;
