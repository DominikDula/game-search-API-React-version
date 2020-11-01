import React, { useEffect, useState } from 'react'

import './GameScreenshots.scss'

function GameScreenshots(props) {
    const [results, setresults] = useState('')
    useEffect(() => {
      GetGameScreenshots()
    }, [])

    const {slug} = props

    async function   GetGameScreenshots() {
             
        let response = await fetch(`https://rawg.io/api/games/${slug}/screenshots`);
        let data = await response.json()
        let results = data.results
        setresults(results)
       
            
        }

    return (
    <div>
        <h1 className="developer-h1">Gallery</h1>
        <div  className="image-grid">
            {results? results.map((image) => {
                return <img   key={image.id} src={image.image} />              
            }):null }
        </div>
           
    </div>
    )
}

export default GameScreenshots
