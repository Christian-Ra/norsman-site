import brentPhoto from "../../Graphics/01-Brent.jpg";
import tomPhoto from "../../Graphics/02-Tom-Novak.jpg";
import jakePhoto from "../../Graphics/03-Jake-Gagner.jpg";
import muPhoto from "../../Graphics/04-Mu-Cao.jpg";

const aboutData = [
  {
    heading: "About Us",
    content: [
      "Founded in 2003 by Brent Norsman, Norsman Architects is centered in Chicago with work extending to the greater Midwest. Established as an Architectural firm, our reach of service has extended to urban design and construction. As architects, we have developed a practice that merges sustainability and design through a focus on research and innovation. With demonstrated abilities as strong communicators and facilitators with the stakeholders on any given project, we believe in a balanced and nuanced approach to each project.",
      "With a wide array of project scales and typologies, there is no project or approach to construction which gives us cause for hesitation. As practitioners well versed in experimentation and implementation, we look forward to each new challenge with a fresh perspective.",
      "Our work and skill set has been honed to avidly investigate and experiment with sustainable design and development, believing that a sustainable practice can meet the demands of any project and is simply responsible design. Sustainability, self-sustaining practice rooted in community, focuses attention on the livability of the street in addition to the built environment. The promotion of this concept is integral to everything we do, from the design of a building to our interaction and involvement in the community, to our place in the larger context of the regions in which we practice. We work hard to stitch our buildings and their occupants into the urban fabric.",
      "In 2006, Mr. Norsman established House Plant, Inc., the design-build construction arm of the firm. This has not only enhanced the firm’s understanding of the construction process and provided value to our clients, it has also enriched our understanding of the construction process. This “hands-on” experience has brought greater understanding of budget and schedule and provided greater control in the execution of our designs.",
      "By thoughtfully and sensitively fostering relationships between architecture, its occupants and the urban and natural environments, Norsman Architects creates structures and sites that are as unique as their circumstances.",
    ],
  },
  // {
  //   heading: "Our Philosophy",
  //   content: [
  //     "Our firm looks to stitch their work into the urban fabric, provide for sustainable long reaching solutions, and provide dynamic spatial experiences that extend beyond the building’s interior into the urban landscape beyond.",
  //   ],
  // },
  {
    heading: "Design Process",
    content: [
      "Norsman Architects seek innovative solutions for built environments. As a full service architectural practice, our projects present opportunities to explore new paradigms in housing and urban development; including mixed-use developments, environmentally responsive adaptive reuse, commercial and residential work.",
      "With an emphasis on conceptual exploration, Norsman Architects believe that a building’s use, its context and original characteristics are critical tools that guide the design process. We work to enrich and enliven this process through a thoughtful and collaborative approach with all parties to the construction process, continually seeking the highest standards of design excellence.",
    ],
  },
];

export const teamInfo = [
  {
    name: "Brent Norsman, AIA",
    title: "Principal",
    bio: "Brent is the founder and principal of Norsman Architects. Throughout his nearly 30 years of architectural practice in the urban backdrop of the City of Chicago he has consistently employed a thoughtful approach to his designs, always considering the context of the local community, challenges of site, context, program, and sustainability.",
    education: [
      [
        "Master of Architecture",
        "- University of Illinois, Chicago, Chicago, 1995",
      ],
      "Bachelor of Arts, Economics and Philosophy - University of Wisconsin-Madison, 1990",
    ],
    headshot: brentPhoto,
    work: [
      "Norsman Architects, Ltd., President - 2003 to Present",
      "Adjunct Associate Professor, Illinois Institute of Technology - 2007 to Present",
      "H+P, Ltd., 1996-2003 - Senior Project Architect",
      "Kathryn Quinn Architects, -1994 - Intern",
      "Taliesin Preservation Commission, - 1991-1992",
      "Assistant to Preservation Director and Project Architect in the historic restoration of Frank Lloyd Wright’s home in Spring Green, Wisconsin Department of Administration, State of Wisconsin -1989-1991",
      "Assistant to the Secretary of the Dept. of Administration, the Governor’s right-hand state-official",
    ],
    affiliations: [
      "City appointed Commissioner for Wicker Park/Bucktown Special Service Assessment (SSA #33)",
      "Member First Ward Milwaukee Avenue Advisory Committee",
      "Guest Facilitator and Critic, University of Illinois-Chicago and Illinois Institute of Technology",
      "American Institute of Architects (AIA)",
      "National Council of Architectural Registration Boards (NCARB)",
    ],
  },

  {
    name: "Tom Novak",
    title: "Project Manager + Designer",
    bio: "Tom is a project manager and designer for Norsman Architects. He assists in all aspects of architectural design, from client presentations to working with the construction team. His passion for architecture is compounded by a deep interest in construction, spatial design, sustainability and nature. His approach to projects involves designing spaces that are human-centered, incorporate natural materials and light and are efficient in terms of materials and energy. He has extensive experience in utilizing design tools and hands-on construction.",
    education: [
      "Bachelor of Architecture",
      "Specialization in Design-Build",
      "- Illinois Institute of Technology, Chicago, 2023",
    ],
    headshot: tomPhoto,
    work: [
      "Project Manager + Designer - Norsman Architects - 2024 to present",
      "Architectual Associate - Norsman Architects - 2023 - 2024",
      "Design-Build Microhouse Studio - Illinois Institute of Technology, 2022",
      "Architectural Intern - Taylor Architecture & Design, North Plainfield, NJ - 2019 to 2021",
      "Watchung Reservation Footbridge - Mountainside, NJ - 2015 to 2017",
    ],
  },
  {
    name: "Jake Gagner",
    title: "Architectual Associate",
    bio: "Jake is an architectural associate at Norsman Architects. He assists in all aspects of architectural design, from client presentations to developing permit sets and construction drawings. His construction experience influences his design decisions through efficient strategies and cost saving measures. His attention to detail and organizational mindset ensures our designs feature clean and minimal details that highlight our modern design approach.",
    education: [
      "Bachelor of Architecture",
      "Minor in Construction Management",
      "Specialization in Design-Build",
      "- Illinois Institute of Technology, Chicago, 2023",
    ],
    headshot: jakePhoto,
    work: [
      "Architectural Associate - Norsman Architects - 2024 to present",
      "Architectural Associate - Filippini Consulting Architects - 2023 to 2024",
      "Student Assistant to the Facilities Director - Illinois Institute of Technology - 2022 to 2023",
      "Design-Build Microhouse Studio - Illinois Institute of Technology - 2022",
      "Engineering Technician (Architecture) - Portsmouth Naval Shipyard Internship - 2019 to 2021",
    ],
  },
  {
    name: "Mu Cao",
    title: "Architectual Intern",
    bio: "Mu is an architectural intern at Norsman Architects. She assists in project documentation, visualization and participates in design conversations. She seeks to contribute to projects that stand at the intersection of architecture, nature, and sustainability, and to further her growth as a designer within a firm that shapes the built environment through pioneering and impactful design.",
    education: [
      "Master of Architecture - University of Pennsylvania, Philadelphia - 2023 to present",
      "Bachelor’s of Engineering with Honors in Architecture - University of Nottingham, Ningbo, China (UNNC) - 2017 to 2021",
      // TODO: Figure out workaround for when there is overhang from education in bio
      // "Exchange Student, University of Nottingham (UNUK), Nottingham, United Kingdom, 2020",
    ],
    headshot: muPhoto,
    work: [
      "Architectural Intern - Norsman Architects - 2024 to present",
      "Architectural Design Assistant - SUnArch, Hangzhou, China - 2022 to 2023",
      "Architectural Intern - ECADI, Shanghai, China - 2021",
      "Architectural Intern in Schematic Development - Qingdao Civil Air Defense Architecture Design and Research Institute, Qingdao, China - 2019",
      "Architectural Intern in Creative Center - Qingdao Architecture Design and Research Institute co.LTD, Huangdao Branch, Qingdao, China - 2018",
    ],
  },
];

export default aboutData;
