import React from 'react'

import './LoadMore.scss';

function LoadMore(props) {
    const {load} = props
    

    return (
<div className="button">
        <button onClick={load} className="prev">Previous</button>
        <button onClick={load} className="next">Next</button>
    </div>
    )
}

export default LoadMore
