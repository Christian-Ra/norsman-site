import './About.scss'
import { motion } from 'framer-motion'

export default function About () {

    return (
        <motion.div exit={{ opacity: 0 }} className="about-container">
          <div className="section">
            <h1>Architect Led Design Build</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
          <div className="section">
            <h1>Key Personal</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
          <div className="section">
            <h1>Recognition</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
        </motion.div>
      );
    };