import './GalleryCard.scss'
import { Link } from 'react-router-dom'

export default function GalleryCard ({project}) {
    // console.log("featured photos: ", project.photos)
    return (
        <Link to={`/norsman-site/projects/${project.id}`} style={{textDecoration: 'none'}}>
        <div className='project-card' style={{backgroundImage: `url(${project.coverPhoto})`}}>
              <h2 className='card-text'>{project.title}</h2>
              {/* <p className='card-text'>{projectSubheading}</p> */}
        </div> 
        </Link>
    )
}