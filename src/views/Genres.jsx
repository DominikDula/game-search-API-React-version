import React, {useState ,useEffect} from 'react'

import TemplateList from '../components/TemplateList.jsx'  ;

function Genres() {
    const [genres, setGenre] = useState('')



    useEffect(() => {

        getGenres()
        
    }, [])

    async function getGenres() {
        try{
            let response = await fetch(`https://api.rawg.io/api/genres`);
            let data = await response.json()
            let results = data.results

            setGenre(results)

        }
        catch(error){
            console.log(error);
        }

    
    


    }

    return (
    <div className="grid-container">
        { genres ? genres.map(genre => ( 
        <TemplateList key={genre.id} item={genre} /> )): null}
    </div>
    )
}

export default Genres



