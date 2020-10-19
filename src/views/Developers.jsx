import React, {useState ,useEffect} from 'react'

import DeveloperList from '../components/developer/DeveloperList.jsx'  ;

function Developers() {
    const [developers, setdeveloper] = useState('')


    useEffect(() => {

        getAllDevelopers()
        
    }, [])

    async function getAllDevelopers() {

        try{
            let response = await fetch(`https://api.rawg.io/api/developers?page_size=20&page=1`);
            let data = await response.json()
            let results = data.results

            setdeveloper(results)

        }
        catch(error){
            console.log(error);
        }
        
    


    }


    return (
<div >
    <div className="grid-container">
        { developers ? developers.map(developer => ( 
        <DeveloperList key={developer.id} developers={developer} /> )): null}
    </div>

</div>
    )
}

export default Developers
