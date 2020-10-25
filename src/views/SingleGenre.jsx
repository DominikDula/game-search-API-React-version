import React , {useState ,useEffect} from 'react'

import { useParams } from 'react-router-dom'

//components
import GameInfo from '../components/game/GameInfo.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;
import SingleTemplate from '../components/creators/SingleTemplate.jsx'  ;



function SingleGenge() {

    const [genres, setgenres] = useState('')
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
       
       getSingleGenre(page)


    }


    useEffect(() => {
        getSingleGenre(page)
        getGenreInfo()
        window.scrollTo(0, 0);
    }, [page])

    async function getSingleGenre(page) {
        try {
            let response = await fetch(`https://api.rawg.io/api/games?genres=${slug}&page=${page}`);
            let data = await response.json()
            let results = data.results

            setgenres(results)

            let next = data.next
            setnext(next)
            }
        catch (error) {
            console.log(error);
        }
    }
    async function getGenreInfo() {

        let response = await fetch(`https://api.rawg.io/api/genres/${slug}`);
        let data = await response.json()
        let info = data
        setinfo(info)

        
        }
    return (
        <div>
            <SingleTemplate info={info} />
            <div className="grid-container">
                {genres ? genres.map(genre => (
                    <GameInfo key={genre.id} games={genre} />
                )) :null}
                
            </div>
            <LoadMore load={Load} />            
        </div>
    )
}

export default SingleGenge

