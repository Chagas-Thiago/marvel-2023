import React from 'react'
import { useRoutes } from "react-router-dom"
import Home from './pages/Home';
import CharIdPage from './pages/CharIdPage';
import HeaderPagesSection from './pagesSections/HeaderPagesSection';
import Background from './components/background/background.js';

function App() {


 let routes = useRoutes([
   { path: "/", element: <Home /> },
   { path: "/charId", element: <CharIdPage /> },
 ]);
  
  return (
    <>
      <Background />
      <HeaderPagesSection />
      {routes}

  </>
      )

}

export default App;
