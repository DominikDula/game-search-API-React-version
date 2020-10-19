import React , {useState ,useEffect} from 'react'

//components
import GameInfo from '../components/game/GameInfo.jsx'  ;


import './Home.scss';

function Home() {

    const [games, setgame] = useState('')

    useEffect(() => {
        getTrendingGame()
        
      },[]);
    async function getTrendingGame() {

        try{
    let response = await fetch(`https://rawg.io/api/games/lists/main?page=1`);
    let data = await response.json()
    //Api returns duplicate results,filter duplicate
    let results = data.results.reduce((unique, o) => {
        if(!unique.some(obj => obj.slug === o.slug )) {
            unique.push(o);
        }

            return unique;
    },[])

    setgame(results)

          
        }
        catch(error){
            console.log(error)
        }

    }

    return (
        <div className="home" >
            <h1>New and Trending</h1>
            <div className="grid-container">
                { games ? games.map(game => ( 
                <GameInfo key={game.id} games={game} /> )): null}
            </div> 

        </div>
    )
}

export default Home
