import "./HomePage.scss"
import GalleryCard from "../gallery/GalleryCard"
import { Projects } from "../../ProjectList"

export default function HomePage() {

    return (
        <body>
          <section className='main-content'>
            <div className="hero-content">
            <h1 className='company-name'>norsman</h1>
            <h2 className='subheading'>Architecture Planning Design</h2>
            </div>
          </section>
          <div className='portfolio-section' id='project1'>
            <h1 className='project-title'>Maria's</h1>
            <h2 className='project-subheading'>Description</h2>
          </div>
          <div className='project-display'>
            {Projects.map((p) => (
              <div key={p.id}>
                <GalleryCard project={p} />
              </div>
            ))}
          </div>
        </body>
    )
}