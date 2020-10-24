import React , {useState ,useEffect} from 'react'

import { useParams } from 'react-router-dom'

//components
import GameInfo from '../components/game/GameInfo.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;
import SingleTemplate from '../components/creators/SingleTemplate.jsx'  ;



function SinglePlatform() {

    const [platforms, setplatforms] = useState('')
    const { id } = useParams()
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
       
       getSinglePlatform(page)


    }


    useEffect(() => {
        getSinglePlatform(page)
        getPlatformInfo()
        window.scrollTo(0, 0);
    }, [page])

    async function getSinglePlatform(page) {
        try {
            let response = await fetch(`https://api.rawg.io/api/games?platforms=${id}&page=${page}`);
            let data = await response.json()
            let results = data.results

            setplatforms(results)

            let next = data.next
            setnext(next)
            }
        catch (error) {
            console.log(error);
        }
    }
    async function getPlatformInfo() {

        let response = await fetch(`https://api.rawg.io/api/platforms/${id}`);
        let data = await response.json()
        let info = data
        setinfo(info)

        
        }
    return (
        <div>
            <SingleTemplate info={info} />
            <div className="grid-container">
                {platforms ? platforms.map(platform => (
                    <GameInfo key={platform.id} games={platform} />
                )) :null}
                
            </div>
            <LoadMore load={Load} />            
        </div>
    )
}

export default SinglePlatform


