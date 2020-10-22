import React from 'react';
import './App.scss';



//components
import TheNavigation from './components/TheNavigation.jsx'  ;
import SearchGame from './components/game/SearchGame.jsx'  ;
import TransitionRoutes from './components/TransitionRoutes.jsx'  ;



function App() {

  return (
    <div className="App">
        <TheNavigation />
        <SearchGame />
        <TransitionRoutes />
      
      

      
    </div>
  )

  
}

export default App;
