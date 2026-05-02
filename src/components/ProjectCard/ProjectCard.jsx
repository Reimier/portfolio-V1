import "./project-card.css";

export default function ProjectCard({image, title, tools, site, more}){

    return(
    <>


    <div className="card">

        <div className="image">

            <img src={image}>
            
            </img>

        </div>

        <div className="title">

            <p>{title}</p>


        </div>

        <div className="tools">

            <p>{tools}</p>

        </div>

        <div className="btn">

        <a href={more} target="_blank">

        <button id="more">Learn more</button>

        </a>
        <a href={site} target="_blank">

        <button id="visit">Visit site</button>

        </a>

        </div>


    </div>
    
    </>
    )
}