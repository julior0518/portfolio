


function Main ({page, setPage}) {

    return (
        <div className="Main" onClick={()=>setPage("main")}>
            {
            page === "main" 
            ?
            <div>
                <h1>  Julio </h1>  
                <p> software developer </p>
                <p> 
                    HTML5 | CSS3 | Tailwind | Python | JQuery | JavaScript | Vue.js | React.js | Redux | Next.js | Mongo DB | Mongoose | Mongosh | PostgreSQL | Solidity | Sanity | Django| 
                    Express | Node.js | Git | GitHub | Heroku | Netlify | Word | Excel | PowerPoint | Adobe Illustrator | Figma | Bubble 
                </p>
            </div>
            :
            <p>Main</p>
            }
            
            
        </div>
    )
}

export default Main;