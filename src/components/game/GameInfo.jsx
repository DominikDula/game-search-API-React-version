import React,{useState , useEffect} from 'react'
import { useHistory } from "react-router-dom";

import { Link} from "react-router-dom";
import './GameInfo.scss'

function GameInfo(props) {
    const {games} = props
    let [isHidden, setisHidden] = useState(false)
    let [showIcon, setshowIcon] = useState(true)
    let [iterator, setiterator] = useState(0)
    let [count, setcount] = useState(-1)
    let [timeout, settimeout] = useState('')
    const history = useHistory();

    useEffect(() => {
        //remove last coma from genres//
         if(isHidden){
            let genre = document.querySelector(".genre")
            if(!genre.lastChild){
                return 
            }
            genre.lastChild.textContent = genre.lastChild.textContent.replace(',',' ') 
            
        } 
    }, [isHidden])


   function PlayVideo(event){
        if(window.innerWidth<665){
            return false
        }
        event.currentTarget.children[0].children[2].lastChild.currentTime = 0
        event.currentTarget.children[0].children[2].lastChild.autoplay = true
        event.currentTarget.children[0].children[2].classList.add("game-video-show");
        setshowIcon(false)


    }

    function RouterPush(){
        if(window.innerWidth<665){
            return false
        }  
        history.push("/games/" + games.slug);
    }


   function StopVideo(event){
        event.currentTarget.children[0].children[2].classList.remove("game-video-show");
        setshowIcon(true)


    }

   function ImageAnimation(){
        if( games.short_screenshots.length<1){
            return false
        }
    
       if(count>=games.short_screenshots.length-1){
           setcount(count=-1)
        }
        
        setcount(count+=1)
        settimeout(setTimeout(() =>{ImageAnimation()}, 1000))  
        setiterator(count) 
        setshowIcon(false)
             

    }
    function PlayClickVideo(event){
        if(window.innerWidth>665){
           return false
       }
           event.target.currentTime = 0
           event.target.autoplay = true
           event.target.parentElement.classList.toggle("game-video-show");
           setshowIcon(showIcon = !showIcon)
      
   }

   function  StopImageAnimation(){
        setiterator(0)
        setcount(count=-1)
          clearTimeout(timeout)
          setshowIcon(true)

        
    
    }   

   function ShowOnHover(){
        setisHidden(true)
    }

    function HideOnHover(){
        setisHidden(false)
    }


    return (

 

        <div onMouseEnter={ShowOnHover} onMouseLeave={HideOnHover} className="game-holder"  >
            <div onMouseEnter={PlayVideo} onMouseLeave={StopVideo} className="game-info" >
                <div>
                    <div className="game-img" >
                        <img src={games.background_image} alt="" />
                    </div>

                    <div className="game-desc">
                        <Link to={"/games/" + games.slug} key={games.slug}>
                            <h1>{games.name}</h1>
                        </Link>
                    </div>
                    <div onClick={PlayClickVideo} className="game-video">
                        <video onClick={RouterPush}  className="videos"    loop  muted >
                            <source src={games.clip ? games.clip.clips['640'] :null} type="video/mp4" />
                        </video>
                    </div>

                    {showIcon && 
                    <div className="play-icon">
                        {games.clip && <i  className="fas fa-play-circle"></i>}
                        {!games.clip && <i  className="fas fa-image"></i>}    
                    </div> } 

                    {!games.clip && games.short_screenshots.length>0 && 
                    <div  className="screenshots" >
                        <img onMouseEnter={ImageAnimation}
                            onMouseLeave={StopImageAnimation} 
                            src={games.short_screenshots[iterator].image} alt="screenshots" />
                    </div> }   
                    
                </div>

                { isHidden && 
                <div  className="more-info">
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
                                <Link to={"/genres/" + genre.slug} key={genre.id}>{genre.name}, </Link>
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
