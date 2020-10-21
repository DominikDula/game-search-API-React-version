import React from 'react'

import { Link} from "react-router-dom";

import './GameInfo.scss'

function GameInfo(props) {
    const {games} = props


    return (

 

        <div className="game-holder"  >
                <div className="game-info" >
                <Link to={"games/" + games.slug} key={games.slug}>
                    <div className="game-img" >
                        <img src={games.background_image} alt="" />
                    </div>

                    <div className="game-desc">
                        <h1>{games.name}</h1>
                    </div>
                </Link>	
                </div>
        </div>
        

    
    )
}

export default GameInfo
