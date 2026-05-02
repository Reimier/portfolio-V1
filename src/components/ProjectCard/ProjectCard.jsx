import "./project-card.css";

export default function ProjectCard({image, title, tools}){

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

          <button id="more">
            Learn More
          </button>
          <button id="visit">
            Visit Site
          </button>

        </div>


    </div>
    
    </>
    )
}