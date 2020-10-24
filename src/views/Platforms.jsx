import React, {useState ,useEffect} from 'react'

import TemplateList from '../components/TemplateList.jsx'  ;

function Platforms() {
    const [platforms, setplatforms] = useState('')

    useEffect(() => {
        getPlatforms()
    }, [])



    async function getPlatforms() {
        try{
            let response = await fetch(`https://api.rawg.io/api/platforms`);
            let data = await response.json()
            let results = data.results
            setplatforms(results)

        }
        catch(error){
            console.log(error);
        }

    
    


    }

    return (
        <div>
    <div className="grid-container">
        { platforms ? platforms.map(platform => ( 
        <TemplateList key={platform.id} item={platform} /> )): null}
    </div>            
        </div>
    )
}

export default Platforms
