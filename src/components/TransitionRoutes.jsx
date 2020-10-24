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
import GlobalSearch from '../views/GlobalSearch';
import Tags from '../views/Tags';
import SingleTag from '../views/SingleTag';
import Platforms from '../views/Platforms';
import SinglePlatform from '../views/SinglePlatform';

function TransitionRoutes({location}){
    
    return(
        <SwitchTransition mode={'out-in'} component="main">
        <CSSTransition  timeout={500} classNames='easing' key={location.key}>
          <Switch location={location}>
              <Route exact path='/' component={Home}/>
              <Route exact path='/developers' component={Developers}/>
              <Route exact path='/genres' component={Genres}/>
              <Route exact path='/games' component={AllGames}/>
              <Route exact path='/tags' component={Tags}/>
              <Route exact path='/platforms' component={Platforms}/>
              <Route exact path='/search/:slug' component={GlobalSearch}/>
              <Route path='/games/:slug' component={SingleGame}/>
              <Route path='/developers/:slug' component={SingleDeveloper}/>
              <Route path='/genres/:slug' component={SingleGenre}/>
              <Route path='/tags/:slug' component={SingleTag}/>
              <Route path='/platforms/:id/:slug' component={SinglePlatform}/>
          </Switch>
        </CSSTransition>
        </SwitchTransition>
)
}

export default withRouter(TransitionRoutes) ;
