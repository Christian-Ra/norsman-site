import "./ProjectPage.scss"
// import Slideshow from "../Slideshow/Slideshow"

// import SwiperComponent from "../swiper/SwiperComponent"
// import SpaceBetweenSwiper from "../swiper/SpaceBetweenSwiper"
// import BlurredSwiper from "../swiper/BlurredSwiper"
import CenteredSwiper from "../swiper/CenteredSwiper"


import ProjectDescription from "../description/ProjectDescription"
// import ProjectGallery from "../gallery/ProjectGallery"

export default function ProjectPage ({project}) {
    return (
        <div>
            <section>
                <CenteredSwiper photos={project.photos} />
            {/* <SpaceBetweenSwiper /> */}
            {/* <   SwiperComponent/> */}
            {/* <BlurredSwiper/> */}
            </section>
            <section>
                <ProjectDescription title={project.title} subHeading={project.subheading} />
            </section>
            {/* <section>
                <ProjectGallery/>
            </section> */}
        </div>
    )
}