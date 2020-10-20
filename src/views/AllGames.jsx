import React , {useState ,useEffect} from 'react'

import GameInfo from '../components/game/GameInfo'


function AllGames() {

    const [allgames, setallgames] = useState('')

    useEffect(() => {
        getAllGame()
    }, [])


    async function getAllGame() {
        try {
            let response = await fetch(`https://rawg.io/api/games?&page=1`);
            let data = await response.json()
            let results = data.results

            setallgames(results)
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

</div>
    )
}


export default AllGames
