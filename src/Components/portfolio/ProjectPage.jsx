import "./ProjectPage.scss"
import Slideshow from "../Slideshow/Slideshow"
import ProjectDescription from "../description/ProjectDescription"
import ProjectGallery from "../gallery/ProjectGallery"

export default function ProjectPage () {
    return (
        <div>
            <section>
            <   Slideshow/>
            </section>
            <section>
                <ProjectDescription/>
            </section>
            <section>
                <ProjectGallery/>
            </section>
        </div>
    )
}