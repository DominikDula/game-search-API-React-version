import React, {useState ,useEffect} from 'react'

import DeveloperList from '../components/developer/DeveloperList.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;

function Developers() {
    const [developers, setdeveloper] = useState('')

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
       
       getAllDevelopers(page)


    }


    useEffect(() => {

        getAllDevelopers(page)
        
    }, [page])

    async function getAllDevelopers(page) {

        try{
            let response = await fetch(`https://api.rawg.io/api/developers?page_size=20&page=${page}`);
            let data = await response.json()
            let results = data.results

            setdeveloper(results)

            let next = data.next
            setnext(next)

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
    <LoadMore load={Load} />

</div>
    )
}

export default Developers
