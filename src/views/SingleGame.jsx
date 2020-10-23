import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'


import './SingleGame.scss';


function SingleGame() {
    const { slug } = useParams()
    const [game, setgame] = useState('')
    const [about, setabout] = useState('')
    const [longabout, setlongabout] = useState('')
    const [shortabout, setshortabout] = useState('')
    const [releaseDate, setreleaseDate] = useState('')
    const [boolean, setboolean] = useState(true)



    useEffect(() => {
        getSingleGame(slug)
        window.scrollTo(0, 0);
    }, [slug])


    async function getSingleGame(slug) {

        try {
            let response = await fetch(`https://rawg.io/api/games/${slug}`);
            let data = await response.json()
            let results = data
            let about = data.description.substring(0,550) +'...'
            let shortabout = data.description.substring(0,550)
            let longabout = data.description
            let releasDate = data.released.split('-').reverse().join('.')
            setgame(results)
            setabout(about)
            setshortabout(shortabout)
            setlongabout(longabout)
            setreleaseDate(releasDate)

            }
        catch (error) {
             console.log(error);
        }

    
    
    }

    function textFromHtml() {
        return {__html: about};
      }

     function ReadMore(){
        setabout(longabout)
        setboolean(false)
    }
    function ReadLess(){
        setabout(shortabout + '...')
        setboolean(true)
    }


    return (
        
        <div>
            <div className="bg-image" style={{backgroundImage: "url(" + game.background_image + ")"}} ></div>
        
        <div className="single-game-name">
            <h1>{game.name}</h1>
        </div>
        <div className="single-game-container" style={{ backgroundImage: 'url(' + game.background_image_additional + ')' }} >
        <h1>About</h1>
            <div className="single-game-desc" >
                <div dangerouslySetInnerHTML={textFromHtml()} />
                { boolean && about.length>500 && 
                <span  onClick={ReadMore} >read more</span>
                }
                { !boolean && about.length>500 && 
                <span  onClick={ReadLess} >read less</span>
                }
            </div>
            <div className="single-game-wrapper">
                <div className="single-game-detail">
                    <section>
                        <h3>Genres</h3>
                            {game ? game.genres.map( genre =>(
                               <a href="/#" key={genre.id}>{genre.name}</a>
                            )) :null} 
                    </section>
                    <section>
                        <h3>Developers</h3>
                        {game ? game.developers.map( developer =>(
                               <a href="/#" key={developer.id}>{developer.name}</a>
                            )) :null} 
                    </section>

                    <section>
                        <h3>Platforms</h3>
                        {game ? game.platforms.map( platform =>(
                               <a href="/#" key={platform.platform.id}>{platform.platform.name}</a>
                            )) :null} 
                    </section>

                    <section>
                        <h3>Tags</h3>
                        {game ? game.tags.map( tag =>(
                               <a href="/#" key={tag.id}>{tag.name}</a>
                            )) :null} 
                    </section>  


                </div>
            </div>


        </div>
        </div>
    )
}

export default SingleGame
