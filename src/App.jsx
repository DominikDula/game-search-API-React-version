import React from 'react';
import './App.scss';
import { Route} from "react-router-dom";

//components
import TheNavigation from './components/TheNavigation.jsx'  ;
import SearchGame from './components/game/SearchGame.jsx'  ;

//views
import Home from "./views/Home.jsx";
import Developers from "./views/Developers.jsx";
import AllGames from "./views/AllGames.jsx";

function App() {
  return (
    <div className="App">
        <TheNavigation />
        <SearchGame />
        
      <main>
      <Route exact path='/' component={Home}/>
      <Route path='/developers' component={Developers}/>
      <Route path='/games' component={AllGames}/>
      </main>
      

      
    </div>
  )
}

export default App;
