import React from 'react';
import './App.scss';



//components
import TheNavigation from './components/TheNavigation.jsx'  ;
import SearchGame from './components/game/SearchGame.jsx'  ;
import TransitionRoutes from './components/TransitionRoutes.jsx'  ;
import TheFooter from './components/TheFooter.jsx'  ;



function App() {

  return (
    <div className="App">
        <TheNavigation />
        <SearchGame />
        <TransitionRoutes />
        <TheFooter />
      
      

      
    </div>
  )

  
}

export default App;
