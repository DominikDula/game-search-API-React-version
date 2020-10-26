import React from 'react'

import './TheFooter.scss'

function TheFooter() {
    return (
    <div  className="footer" >
        <div className="project-info">
            <div className="database">
            <p>Database and design inspiration</p>
            <a href="https://rawg.io/" target="_blank">
                <img src ={require("../assets/rawg-logo.png")}  alt="" />
            </a>
            </div>
            
            <div className="vue">
                <p>Project built with</p>
            <a href="https://reactjs.org/" target="_blank">
                <img src ={require("../assets/logo512.png")} alt="" />
            </a>
            </div>
            
        </div>
    </div>
    )
}

export default TheFooter
