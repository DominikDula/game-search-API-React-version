import React from 'react'
import './SearchGame.scss'


function SearchGame() {
    
    // const [query, setstate] = useState('')



    return (
        <div>
            <div className="search">
                <form action="">
                    <input id="input" type="text" autoComplete="off" />
                    <i className="fas fa-search"></i>
                </form>
            </div>            
        </div>
    )
}

export default SearchGame
