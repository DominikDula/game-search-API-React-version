import React from 'react'

import './DeveloperList.scss'

function DeveloperList(props) {
    const {developers} = props
    return (
        <div className="item-info" style={{backgroundImage: "url(" + developers.image_background + ")"}}  >    
            <div className="item-name">                
                <h1>{developers.name}</h1>
            </div>

        <div className="item-desc">
            <h3>Popular games:</h3>             
            <ul>
                {developers.games.slice(0, 3).map(game => ( 
                <li key={game.id}>
                    <a>{game.name}</a>
                </li> ))}
            </ul>
        </div>
    </div>
    )
}

export default DeveloperList
