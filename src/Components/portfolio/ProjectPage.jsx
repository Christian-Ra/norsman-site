import "./ProjectPage.scss"
// import Slideshow from "../Slideshow/Slideshow"

// import SwiperComponent from "../swiper/SwiperComponent"
// import SpaceBetweenSwiper from "../swiper/SpaceBetweenSwiper"
// import BlurredSwiper from "../swiper/BlurredSwiper"
import CenteredSwiper from "../swiper/CenteredSwiper"


import ProjectDescription from "../description/ProjectDescription"
import ProjectGallery from "../gallery/ProjectGallery"

export default function ProjectPage () {
    return (
        <div>
            <section>
                <CenteredSwiper/>
            {/* <SpaceBetweenSwiper /> */}
            {/* <   SwiperComponent/> */}
            {/* <BlurredSwiper/> */}
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