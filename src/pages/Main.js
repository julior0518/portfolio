import { useEffect, useState } from 'react'


function Main ({page, setPage}) {
    const [css, setCss] = useState('pageSelect')

    useEffect(()=>{
        page === "main" && setCss('main')
    }, [page])
    
    return (
        <div className={css} onClick={()=>setPage("main")}>
            <p>Main</p>
            {
            page === "main" 
            &&
            <div>
                <h1>  Julio </h1>  
                <p> software developer </p>
                <p> 
                    HTML5 | CSS3 | Tailwind | Python | JQuery | JavaScript | Vue.js | React.js | Redux | Next.js | Mongo DB | Mongoose | Mongosh | PostgreSQL | Solidity | Sanity | Django| 
                    Express | Node.js | Git | GitHub | Heroku | Netlify | Word | Excel | PowerPoint | Adobe Illustrator | Figma | Bubble 
                </p>
            </div>
            }
        </div>
    )
}

export default Main;