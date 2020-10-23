import React from 'react'


import './SingleTemplate.scss';

function SingleTemplate(props) {
    const {info} = props

    function textFromHtml() {
        return {__html: info.description};
      }

    return (
        <div className="platform">
        <h1>{info.name}</h1>
       {info.description ?
       <article  style={{ backgroundImage: 'url(' + info.image_background + ')' }} dangerouslySetInnerHTML={textFromHtml()}></article> :null } 
    </div>
    )
}

export default SingleTemplate
