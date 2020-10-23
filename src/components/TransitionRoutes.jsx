import React from 'react'

import './TransitionRoutes.scss';

import { Switch, Route, withRouter } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";



//views
import Home from "../views/Home.jsx";
import Developers from "../views/Developers.jsx";
import AllGames from "../views/AllGames.jsx";
import SingleGame from "../views/SingleGame.jsx";
import Genres from '../views/Genres';
import SingleDeveloper from '../views/SingleDeveloper';
import SingleGenre from '../views/SingleGenre';

function TransitionRoutes({location}){
    
    return(
        <SwitchTransition mode={'out-in'} component="main">
        <CSSTransition  timeout={500} classNames='easing' key={location.key}>
          <Switch location={location}>
              <Route exact path='/' component={Home}/>
              <Route exact path='/developers' component={Developers}/>
              <Route exact path='/genres' component={Genres}/>
              <Route exact path='/games' component={AllGames}/>
              <Route path='/games/:slug' component={SingleGame}/>
              <Route path='/developers/:slug' component={SingleDeveloper}/>
              <Route path='/genres/:slug' component={SingleGenre}/>
          </Switch>
        </CSSTransition>
        </SwitchTransition>
)
}

export default withRouter(TransitionRoutes) ;
