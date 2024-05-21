import "./HomePage.scss"

export default function HomePage() {
    return (
        <body>
          <section className='main-content'>
            <h1 className='company-name'>norsman</h1>
            <h2 className='subheading'>Architecture Planning Design</h2>
          </section>
          <div className='portfolio-section' id='project1'>
            <h1 className='project-title'>Maria's</h1>
            <h2 className='project-subheading'>Description</h2>
          </div>
          <div className='project-display'>
            <div className='project-card'>
              <h4>Project 1</h4>
              <p>Project description...</p>
            </div>
            <div className='project-card'>
              <h4>Project 2</h4>
              <p>Project description...</p>
            </div>
            <div className='project-card'>
              <h4>Project 3</h4>
              <p>Project description...</p>
            </div>
            <div className='project-card'>
              <h4>Project 4</h4>
              <p>Project description...</p>
            </div>
            <div className='project-card'>
              <h4>Project 5</h4>
              <p>Project description...</p>
            </div>
            <div className='project-card'>
              <h4>Project 6</h4>
              <p>Project description...</p>
            </div>
            {/* <!-- Add more project cards as needed --> */}
          </div>
        </body>
    )
}