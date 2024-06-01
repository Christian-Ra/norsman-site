import "./ProjectGallery.scss"
import template from "../../Project_placeholders_photos/Exterior1.jpg"
export default function ProjectGallery () {
    
    return (
        <section class="gallery">
    <div className="gallery-item"><img src={template} alt="Image 1"/></div>
    <div className="gallery-item"><img src={template} alt="Image 2"/></div>
    <div className="gallery-item"><img src={template} alt="Image 3"/></div>
    <div className="gallery-item"><img src={template} alt="Image 4"/></div>
    <div className="gallery-item"><img src={template} alt="Image 5"/></div>
    <div className="gallery-item"><img src={template} alt="Image 6"/></div>
</section>

    )
}