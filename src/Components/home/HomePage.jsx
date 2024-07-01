import "./HomePage.scss"
import GalleryCard from "../gallery/GalleryCard"
import { Projects } from "../../ProjectList"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function HomePage() {
  const { state } = useLocation()
  const { targetId } = state || {}
  console.log("state: " , state)
  useEffect(() => {
    const el=document.getElementById(targetId)
    if(el) {
      el.scrollIntoView()
    }
    return
  }, [targetId])

    return (
      <motion.div exit={{ opacity: 0 }}>
          <section className='main-content' id="landing">
            <div className="hero-content">
            <h1 className='company-name'>norsman</h1>
            <h2 className='subheading'>Architect Led Design Build</h2>
            </div>
          </section>
          <div className='portfolio-section' id='project1'>
            <h1 className='project-title'>Maria's</h1>
            <h2 className='project-subheading'>Description</h2>
          </div>
          <div className='project-display' id="project-gallery">
            {Projects.map((p) => (
              <div key={p.id}>
                <GalleryCard project={p} />
              </div>
            ))}
          </div>
        </motion.div>
    )
}