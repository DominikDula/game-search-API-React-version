import React, {useState ,useEffect} from 'react'

import TemplateList from '../components/TemplateList.jsx'  ;
import LoadMore from '../components/LoadMore.jsx'  ;

function Tags() {
    const [tags, settag] = useState('')

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
       
       getAllTags(page)


    }


    useEffect(() => {

        getAllTags(page)
        
    }, [page])

    async function getAllTags(page) {

        try{
            let response = await fetch(`https://api.rawg.io/api/tags?page_size=20&page=${page}`);
            let data = await response.json()
            let results = data.results

            settag(results)

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
        { tags ? tags.map(tag => ( 
        <TemplateList key={tag.id} item={tag} /> )): null}
    </div>
    <LoadMore load={Load} />

</div>
    )
}

export default Tags

