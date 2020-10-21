import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'


import './SingleGame.scss';


function SingleGame() {
    const { slug } = useParams()
    const [game, setgame] = useState('')
    const [about, setabout] = useState('')



    useEffect(() => {
        getSingleGame(slug)
        window.scrollTo(0, 0);
    }, [slug])


    async function getSingleGame(slug) {

        try {
            let response = await fetch(`https://rawg.io/api/games/${slug}`);
            let data = await response.json()
            let results = data
            let about = data.description
            setgame(results)
            setabout(about)

            }
        catch (error) {
             console.log(error);
        }

    
    
    }

    function textFromHtml() {
        return {__html: about};
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
