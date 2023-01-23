import React from 'react'
import { useRoutes } from "react-router-dom"
import CharPage from './pages/CharPage';
import CharIdPage from './pages/CharIdPage';
import HeaderPagesSection from './pagesSections/HeaderPagesSection';
import TechPage from './pages/TechPage';
import HomePage from './pages/HomePage';

function App() {


  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/charPage", element: <CharPage /> },
   { path: "/charId", element: <CharIdPage /> },
   { path: "/techPage", element: <TechPage /> },
 ]);
  
  return (
    <>
      {/* <Background /> */}
      <HeaderPagesSection />
      {routes}

  </>
      )

}

export default App;
