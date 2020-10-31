import React , {useState ,useEffect} from 'react'

//components
import GameInfo from '../components/game/GameInfo.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;


import './Home.scss';

function Home() {

    const [games, setgame] = useState('')
    let [next, setnext] = useState('')
    let [page, setpage] = useState(1)

    const Load = data =>{
      
        if(data.target.className === 'next'){
            if(next === null){
                return
            }
            setpage(page+=1)
            window.scrollTo(0, 0);
        }
        if(data.target.className === 'prev'){
            if(page<=1){
                return
            }
            setpage(page-=1)
            window.scrollTo(0, 0);
        }
       
       getTrendingGame(page)


    }

  

    useEffect(() => {
        getTrendingGame(page)
        
      },[page]);
    async function getTrendingGame(page) {

        try{
    let response = await fetch(`https://rawg.io/api/games/lists/main?page=${page}`);
    let data = await response.json()
    //Api returns duplicate results,filter duplicate
    let results = data.results.reduce((unique, o) => {
        if(!unique.some(obj => obj.slug === o.slug )) {
            unique.push(o);
        }

            return unique;
    },[])
    let next = data.next
    setnext(next)


    setgame(results)

          
        }
        catch(error){
            console.log(error)
        }

    }

    return (
        <div className="home" >
            <h1 className="home-h1" >New and Trending</h1>
            <div className="grid-container">
                { games ? games.map(game => ( 
                <GameInfo key={game.id} games={game} /> )): null}
            </div> 

            <LoadMore load={Load} />

        </div>
    )
}

export default Home
