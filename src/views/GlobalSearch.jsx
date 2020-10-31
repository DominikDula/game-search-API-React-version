import React , {useState ,useEffect} from 'react'

import { useParams } from 'react-router-dom'

//components
import GameInfo from '../components/game/GameInfo.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;


import './GlobalSearch.scss';

function GlobalSearch() {

    const [searchgames, setsearchgames] = useState('')
    const { slug } = useParams()

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
       
       getAllGame(page,slug)


    }

    useEffect(() => {
        getAllGame(page,slug)
    }, [page,slug])

    async function getAllGame(page,slug) {
        try {
            let response = await fetch(`https://rawg.io/api/games?search=${slug}&page=${page}`);
            let data = await response.json()
            let results = data.results

            setsearchgames(results)

            let next = data.next
            setnext(next)
            }
        catch (error) {
            console.log(error);
        }
    }
    return (
    <div>
        <h1 className="global-search-h1" >Results for "{slug}"</h1>
        <div className="grid-container">
            {searchgames ? searchgames.map(game => (
                <GameInfo key={game.id} games={game} />
            )) :null}
            
        </div>
        <LoadMore load={Load} />            
    </div>
    )
}

export default GlobalSearch
