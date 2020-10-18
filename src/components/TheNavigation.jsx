import React from 'react'
import { NavLink} from "react-router-dom";

import './TheNavigation.scss';

function TheNavigation() {
    return (
        <div className="nav-container">
            <div  id="nav" className=" navigation">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/developers">Developers</NavLink>
                <NavLink to="/games">All games</NavLink>

            </div>
        </div>
    )
}

export default TheNavigation
