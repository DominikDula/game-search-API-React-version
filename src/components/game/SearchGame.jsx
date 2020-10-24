import React, { useRef} from 'react'
import { useHistory } from 'react-router-dom'
import './SearchGame.scss'




function SearchGame() {

    const search = useRef(null)
    const history = useHistory()

    function prevent(e){
        e.preventDefault()
        history.push("/search/" + search.current.value)
        search.current.value = ""

    }



    return (
        <div>
            <div className="search">
                <form onSubmit={prevent}>
                    <input placeholder="Search games" ref={search} id="input" type="text" autoComplete="off" />
                    <i className="fas fa-search"></i>
                </form>
            </div>            
        </div>
    )
}

export default SearchGame
