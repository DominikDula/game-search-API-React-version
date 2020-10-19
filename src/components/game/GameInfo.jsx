import React from 'react'

import './GameInfo.scss'

function GameInfo(props) {
    const {games} = props

     
    return (

 

        <div className="game-holder"  >
        
                <div className="game-info" >
                    <div className="game-img" >
                        <img src={games.background_image} alt="" />
                    </div>

                    <div className="game-desc">
                        <h1>{games.name}</h1>
                    </div>
                </div>	
        </div>
        

    
    )
}

export default GameInfo
