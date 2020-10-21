import React , {useState ,useEffect} from 'react'

import GameInfo from '../components/game/GameInfo'
import LoadMore from '../components/LoadMore.jsx'  ;


function AllGames() {

    const [allgames, setallgames] = useState('')

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
       
       getAllGame(page)


    }

    useEffect(() => {
        getAllGame(page)
    }, [page])


    async function getAllGame(page) {
        try {
            let response = await fetch(`https://rawg.io/api/games?&page=${page}`);
            let data = await response.json()
            let results = data.results

            setallgames(results)

            let next = data.next
            setnext(next)
            }
        catch (error) {
            console.log(error);
        }
    }

    return (
<div >
    <div className="grid-container">
        {allgames ? allgames.map(game => (
            <GameInfo key={game.id} games={game} />
        )) :null}
        
    </div>
    <LoadMore load={Load} />

</div>
    )
}


export default AllGames
