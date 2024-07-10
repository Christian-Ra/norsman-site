import "./About.scss";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="about-container">
        <div className="about-text">
          <div className="section">
            <h1>About Us</h1>
            <p>
              Founded in 2003 by Brent Norsman, Norsman Architects is centered
              in Chicago with work extending to the greater Midwest. Established
              as an Architectural firm, our reach of service has extended to
              urban design and construction. As architects, we have developed a
              practice that merges sustainability and design through a focus on
              research and innovation. With demonstrated abilities as strong
              communicators and facilitators with the stakeholders on any given
              project, we believe in a balanced and nuanced approach to each
              project.
            </p>
            <br></br>
            <p>
              With a wide array of project scales and typologies, there is no
              project or approach to construction which gives us cause for
              hesitation. As practitioners well versed in experimentation and
              implementation, we look forward to each new challenge with a fresh
              perspective.
            </p>
            <br></br>
            <p>
              Our work and skill set has been honed to avidly investigate and
              experiment with sustainable design and development, believing that
              a sustainable practice can meet the demands of any project and is
              simply responsible design. Sustainability, self-sustaining
              practice rooted in community, focuses attention on the livability
              of the street in addition to the built environment. The promotion
              of this concept is integral to everything we do, from the design
              of a building to our interaction and involvement in the community,
              to our place in the larger context of the regions in which we
              practice. We work hard to stitch our buildings and their occupants
              into the urban fabric.
            </p>
            <br></br>
            <p>
              In 2006, Mr. Norsman established House Plant, Inc., the
              design-build construction arm of the firm. This has not only
              enhanced the firm’s understanding of the construction process and
              provided value to our clients, it has also enriched our
              understanding of the construction process. This “hands-on”
              experience has brought greater understanding of budget and
              schedule and provided greater control in the execution of our
              designs.
            </p>
            <br></br>
            <p>
              By thoughtfully and sensitively fostering relationships between
              architecture, its occupants and the urban and natural
              environments, Norsman Architects creates structures and sites that
              are as unique as their circumstances.
            </p>
          </div>
          <div className="section">
            <h1>Our Philosophy</h1>
            <p>
              Our firm looks to stitch their work into the urban fabric, provide
              for sustainable long reaching solutions, and provide dynamic
              spatial experiences that extend beyond the building’s interior
              into the urban landscape beyond.
            </p>
          </div>
          <div className="section">
            <h1>Design Strategy</h1>
            <p>
              Norsman Architects seek innovative solutions for built
              environments. As a full service architectural practice, our
              projects present opportunities to explore new paradigms in housing
              and urban development; including mixed-use developments,
              environmentally responsive adaptive reuse, commercial and
              residential work.
            </p>
            <br></br>
            <p>
              With an emphasis on conceptual exploration, Norsman Architects
              believe that a building’s use, its context and original
              characteristics are critical tools that guide the design process.
              We work to enrich and enliven this process through a thoughtful
              and collaborative approach with all parties to the construction
              process, continually seeking the highest standards of design
              excellence.
            </p>
          </div>
        </div>
        <div className="about-images">this is placeholder</div>
      </div>
      <div className="project-team">
        <h1>Project Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada.
        </p>
      </div>
    </motion.div>
  );
}
