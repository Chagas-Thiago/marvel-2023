import React from 'react'
import { useRoutes } from "react-router-dom"
import Home from './pages/HomePage';
import CharIdPage from './pages/CharIdPage';
import HeaderPagesSection from './pagesSections/HeaderPagesSection';
import Background from './components/background/background.js';
import TechPage from './pages/TechPage';

function App() {


 let routes = useRoutes([
   { path: "/", element: <Home /> },
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
