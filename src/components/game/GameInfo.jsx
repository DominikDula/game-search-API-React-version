import React,{useState , useEffect} from 'react'

import { Link} from "react-router-dom";

import './GameInfo.scss'

function GameInfo(props) {
    const {games} = props
    let [isHidden, setisHidden] = useState(false)

    useEffect(() => {
        //remove last coma from genres//
        if(isHidden){
            let genre = document.querySelector(".genre")
            genre.lastChild.textContent = genre.lastChild.textContent.replace(',',' ')
        } 
    }, [isHidden])


   function PlayVideo(event){
        event.target.currentTime = 0
        event.target.autoplay = true
        event.target.parentElement.classList.add("game-video-show");


    }

   function StopVideo(event){
        event.target.parentElement.classList.remove("game-video-show");


    }

   function ShowOnHover(){

        setisHidden(true)

    }

    function HideOnHover(){

        setisHidden(false)

    }


    return (

 

        <div onMouseEnter={ShowOnHover} onMouseLeave={HideOnHover} className="game-holder"  >
                <div className="game-info" >
                <Link to={"games/" + games.slug} key={games.slug}>
                    <div className="game-img" >
                        <img src={games.background_image} alt="" />
                    </div>

                    <div className="game-desc">
                        <h1>{games.name}</h1>
                    </div>
                    <div className="game-video">
                        <video onMouseEnter={PlayVideo} onMouseLeave={StopVideo} className="videos"    loop  muted >
                            <source src={games.clip ? games.clip.clips['640'] :null} type="video/mp4" />
                        </video>
                    </div>
                </Link>

                { isHidden && <div  className="more-info">
                    <ul>
                        <li>
                            <span className="span-title" >Rating: </span> 
                            <span>{games.rating}</span>
                        </li>
                        <li>
                            <span className="span-title">Released: </span> 
                            {games.released? <span v-if="item.released">{games.released.split('-').reverse().join('.')}</span> :null } 
                        </li>
                        <li>
                            <span className="span-title">Genres: </span> 
                            <span className="genre"> 
 
                                {games ? games.genres.slice(0,3).map( genre =>(
                               <a href="/#" key={genre.id}>{genre.name}, </a>
                            )) :null} 
   
    
                            </span>
                        </li>
                    </ul>
                                </div>}	
                </div>
        </div>
        

    
    )
}

export default GameInfo
