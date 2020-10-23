import React , {useState ,useEffect} from 'react'

import { useParams } from 'react-router-dom'

//components
import GameInfo from '../components/game/GameInfo.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;

import './SingleDeveloper.scss';

function SingleDeveloper() {

    const [developers, setdevelopers] = useState('')
    const { slug } = useParams()
    let [next, setnext] = useState('')
    let [page, setpage] = useState(1)
    let [info, setinfo] = useState('')

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
        getDeveloperInfo()
        window.scrollTo(0, 0);
    }, [page])


    async function getAllDevelopers(page) {
        try {
            let response = await fetch(`https://api.rawg.io/api/games?developers=${slug}&page=${page}`);
            let data = await response.json()
            let results = data.results

            setdevelopers(results)

            let next = data.next
            setnext(next)
            }
        catch (error) {
            console.log(error);
        }
    }
    async function getDeveloperInfo() {

        let response = await fetch(`https://api.rawg.io/api/developers/${slug}`);
        let data = await response.json()
        let info = data
        setinfo(info)

        
        }

    return (
        <div>
            <h1> Developed by {info.name}</h1>
            <div className="grid-container">
                {developers ? developers.map(developer => (
                    <GameInfo key={developer.id} games={developer} />
                )) :null}
                
            </div>
            <LoadMore load={Load} />            
        </div>
    )
}

export default SingleDeveloper
