import React from 'react'

import './GameInfo.scss'

function GameInfo(props) {
    const {game} = props

     
    return (
    <div className="grid-container">
        { game.map(gam => ( 

        <div key={gam.id} className="game-holder">
        
                <div className="game-info" >
                    <div className="game-img" >
                        <img src={gam.background_image} alt="" />
                    </div>

                    <div className="game-desc">
                        <h1>{gam.name}</h1>
                    </div>
                </div>	
        </div>
        
        ))}
    </div>
    
    )
}

export default GameInfo
