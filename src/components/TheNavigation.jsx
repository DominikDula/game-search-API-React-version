import React, { useState } from 'react'
import { NavLink} from "react-router-dom";

import './TheNavigation.scss';

function TheNavigation() {
    let [isActive, setisActive] = useState(true)
    let [isNotActive, setisNotActive] = useState(false)

   function ToggleNav() {

        if(isActive){
            document.documentElement.style = 'overflow:hidden;'
        }else if(isNotActive){
            document.documentElement.style = 'overflow:visible;'
        }

        setisActive(isActive = !isActive) 
        setisNotActive(isNotActive = !isNotActive)   
    }

   function NavClick(event){
        if(window.innerWidth>600){
            return false
        }

        if(isActive){
            document.documentElement.style = 'overflow:hidden;'
        }else if(isNotActive){
            document.documentElement.style = 'overflow:visible;'
        }
        if(event.target.id === 'nav'){
            return false
        } 

        setisActive(true)
        setisNotActive(false)
        
       
        
        
    }
    return (
        <div className="nav-container">
            <div onClick={NavClick}  id="nav" className=" navigation" className={isActive ? 'navigation' : isNotActive ? 'navigation navigation-show' : ''}>
                <NavLink activeClassName={'active'} exact to="/">Home</NavLink>
                <NavLink activeClassName={'active'} to="/developers">Developers</NavLink>
                <NavLink activeClassName={'active'} exact to="/games">All games</NavLink>
                <NavLink activeClassName={'active'} to="/genres">Genres</NavLink>
                <NavLink activeClassName={'active'} to="/tags">Tags</NavLink>
                <NavLink activeClassName={'active'} to="/platforms">Platforms</NavLink>

            </div>
            <div className="hamburger">
                <i onClick={ToggleNav} className="fas fa-bars show" className={ isActive ? 'fas fa-bars show' : isNotActive ? 'fas fa-times' : '' }></i>
            </div>
        </div>
    )
}

export default TheNavigation
