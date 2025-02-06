const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove special characters
    .replace(/-+/g, "-") // Remove duplicate hyphens
    .trim(); // Remove leading/trailing spaces
};

export const collections = [{}];

export const projects = [
  // {
  //   title: "Woodlawn",
  //   subHeading: "9,400 s.f. Single Family Residence",
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "Landscape Architects – The Outside Design Studio",
  //   ],
  //   description: [
  //     "The adaptive re-use and addition to this existing historical, Georgian-style residence presented a challenge.  How to resolve the 120-year-old historic exterior with a modern interior. At the core of the home is a two-story space that was carved from the building by removing the 2nd floor ballroom. This central, family gathering area includes a hearth, formal living and dining room spaces.  The arch top front façade windows in the space were enhanced by removing the bricked-in half circle tops.  An open central metal and millwork custom stair connects the floors and centers the plan in this two-story space.  A terraced sunroom addition was added to the rear of the home that steps down from the first floor of living to the generous rear yard of this triple-lot home. Large format lift-and-slide windows, skylights and a green roof above stitch the rooms interior to the exterior.  Minimally detailed, white-washed white oak wall paneling and millwork line the first floor.  The building’s exterior was lovingly restored with all new copper sheet metal work, a new slate roof and restored masonry that cement the owner’s desire to make an investment in the historic home that will last another 120 years.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Division",
  //   subHeading: "29,000 s.f. Mixed use Residential/ Commercial",
  //   credits: ["Structural Engineer – Louis Shell Structures"],
  //   description: [
  //     "This adaptive re-use and addition to a historic limestone façade structure on Wicker Park’s bustling Division Street boulevard sought to create a contextually scaled and relevant in-fill façade to the existing street wall.  Window openings and floors were scaled to the existing surrounding context, and a sun-shading louvered façade was added to the addition.  The finely detailed louvers on each floor are installed at different angles so the façade can dynamically reveal itself slowly as one approaches and reveals the fiber-cement green colored rainscreen behind, activating the facade.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Bosworth",
  //   subHeading: "5,800 s.f. Single Family Residence",
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "Landscape Architects – The Outside Design Studio",
  //   ],
  //   description: [
  //     "This extensive renovation and addition to an existing 120 + year old Victorian era frame home was a near re-construction of the original structure.  The project was driven by the owner’s desire to “re-use” the home they had renovated 25 years prior and have lived in since.  Side additions were added to the wide lot home to create a focal point landscaped courtyard centered on the new custom steel and glass stair and custom millwork throughout.  An attached garage with rooftop garden and Ipe sustainable decking and trellis makes for meaningful outdoor urban space.  Every effort was made to emphasize the connection between interior and exterior landscaped areas including a third-floor sunroom that provides a wintertime sun-filled retreat.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Kimbark",
  //   subHeading: "5,800 s.f. Single Family Residence",
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "Landscape Architects – The Outside Design Studio",
  //   ],
  //   description: [
  //     "This gut renovation and modern addition to an existing 110-year-old Hyde Park home on a large Chicago lot has been affectionately nick-named by a City of Chicago inspector the “Mullet house”.  All business in the front with a party in the back.  The modern concrete stucco clad addition includes a cantilevered Master Suite extending into the rear yard and a two-story great room that includes a modern 2 story fireplace clad in lime plaster.   Extensive landscaping includes a rear yard pine forest, a hidden fire pit, green roof and a side yard putting green that complete the home.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "New City Moving Company",
  //   subHeading: "16,296 s.f. Commercial Warehouse Office Renovation",
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "Landscape Architects – The Outside Design Studio",
  //   ],
  //   description: [
  //     "The adaptive re-use conversion of this existing 2-story steel warehouse facility was completed to house the central office and distributing center to the fastest growing moving company in Chicago.  In the central 2-story office space, integrated planters were carved from the first-floor slab to create Biophilic elements of large-scale tropical plants. An architectural approach that connects occupants to nature by incorporating natural elements into buildings.  Design elements were crafted from re-purposed materials taken from the moving industry including pallet screens and soffits and a box-inspired stadium style employee lounge area.  The companies graphic branding are incorporated into the design with large format murals.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Fairbanks",
  //   subHeading: ["5,500 s.f. Single Family Penthouse Flat"],
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "MEP engineers – Environmental Systems Design, Inc.",
  //   ],
  //   description: [
  //     "Located in Helmut Jahn’s signature condominium building in the Streeterville neighborhood of Chicago, this penthouse unit was designed around the original owner’s bachelor lifestyle and was recently purchased by Chance the Rapper.  Highly customized black walnut paneling, doors and custom millwork throughout create a common theme in the unit and include a floor to ceiling paneled cigar room.  A wood paneled hallway gallery with LED floor lighting highlight the owner’s extensive art collection.  The entire floor was raised with an air-floor HVAC heating system to eliminate ductwork and distribute heat evenly at the window line with minimal floor diffusers.  The floor is finished with custom terrazzo flooring with laser cut art features of different metals that are integrated into the floor.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Milwaukee",
  //   subHeading: "5,500 s.f. Single Family Flat",
  //   credits: ["Structural Engineer – Louis Shell Structures"],
  //   description: [
  //     "Norsman was challenged with a thoughtful in-fill addition to an existing frame building in the Historic Milwaukee Avenue Landmark district, it was decided to make the new structure contextually “fit-in” by standing out.  The neighborhood’s historic use as a commercial furniture district presented a context of a wide array of ornate facades, loud signage and neon.  To fit-in, an asymmetrical set of windows in scale with the large format “Chicago-style” windows in the historic district and orange metal panels create a contextually scaled, timeless in-fill composition.  Worthy competition to the historic “red-light” style historic structures.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Wolcott",
  //   subHeading: "",
  //   credits: ["Consultants:  Structural Engineer – Louis Shell Structures"],
  //   description: [],
  //   photoIDs: [],
  // },
  // {
  //   title: "Potomac",
  //   subHeading: "5,800 s.f. Single Family Residence",
  //   credits: ["Consultants:  Structural Engineer – Louis Shell Structures"],
  //   description: [
  //     "Centering this Wicker Park home is a sunken living room “conversation pit” and an open plan with rooms radiating around this central two-story hearth.  Warm, scandic materials including polished concrete, whitewashed black walnut floors, custom millwork and sloped pine ceilings complement the light-filled interiors.  This wide Chicago lot home utilizes minimally detailed concrete stucco and whitewashed exterior wood cladding.  A heavily landscaped yard including thirteen trees have warmly stitched this home into the neighborhood.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Leavitt I",
  //   subHeading: "6,500 s.f. Single Family Residence",
  //   credits: ["Consultants:  Structural Engineer – Louis Shell Structures"],
  //   description: [
  //     "A corner courtyard building on a double lot, this adaptive re-use residence transformed a derelict 2-unit apartment with ground floor commercial building into a modern home for live, work, and play.  At the building’s core first level, a maker space and music room were added at opposite ends of the interior court with accordian window walls that completely open to create one massive interior/exterior space for public music performances.  The owner has had multiple concerts since with a guest list of 100 or more. The original 400-year-old “old growth” pine floor joists were harvested and reused for building elements including the central staircase, siding, new structural beams in the music room and a custom exterior fence.  A custom black walnut millwork kitchen was designed to resemble the owner’s (and our) favorite restaurant in Chicago, Lula Café in Logan Square.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Maria's",
  //   subHeading: "2,500 s.f. Bar/ Restaurant addition",
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "MEP engineers – Environmental Systems Design, Inc.",
  //   ],
  //   description: [
  //     "This 2500 s.f. addition was intended to be an eccentric addition to the historical, consistently ranked “best dive bar”, Maria’s in the Bridgeport neighborhood of Chicago.  The challenge presented by this addition was to respect this sacred, historic space while discreetly adding a new substantial bar and restaurant addition.  The existing packaged goods store and bar were left virtually untouched with only one new access point to the addition at the rear of the bar in typical speak-easy fashion.  Guests must bathe in the history of the original bar prior to entering the new addition. The entire one-story roof of the addition is warped and rises to the street creating a dynamic street presence.  A skylight above the bar warps and twists to meet the northern sun providing indirect daylighting over the mixologist area.  Simple, inexpensive materials are used in a creative fashion throughout.  The roof tile mosaic is cut from standard plywood.  The sheets are cut in a precise fashion and reassembled in a colorful mosaic. Shou sugi ban burnt wood slats are assembled on the bar front in another mosaic custom pattern. Inexpensive pine boards are stained, cut and assembled on the front façade. Skatelite, a material used for the surfaces of skate parks, is used for table tops and the bar top.  All bar/restaurant furniture was custom designed and fabricated on site of stained birch plywood.",
  //     "The building opens up to the rear beer garden with 2 large glass garage doors, and to the side yard with two large, hidden pivot walls behind the built-in benches so the owners can host larger events in the neighborhood they affectionately call the “Community of the Future”.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Marz Brewing",
  //   subHeading: "22,000 s.f. Commercial Renovation of Loft Building",
  //   credits: [
  //     "Structural Engineer – Louis Shell Structures",
  //     "MEP engineers – Environmental Systems Design, Inc.",
  //   ],
  //   description: [
  //     "Ideally, larger scale breweriy facilities such as this are located on the ground floor of a building to accommodate the movement of brewing materials into the facility and finished products out of the facility.  Our client presented us with a less-than-ideal existing loft building with a first floor a half floor above grade and a basement level a half level below grade.  Neither floor had the ceiling height to accommodate the new brewing equipment.  By removing a portion of the first-floor loft construction, we were able to locate the brewery in the basement and utilize the existing freight elevator to move products in and out of the facility.  A glass atrium surrounds the new two-story space so the brewing production could be observed from the tasting room/ Brewpub on the first floor.  Material from the removed floor was re-purposed to create bar tables and booths in the tasting room.  Art walls adorn the walls of the Brewpub from artists curated by the owner who happens to own a “counter-culture” contemporary art gallery in this “Back of the Yards” neighborhood.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Wicker Park",
  //   subHeading: "9,600 s.f. Mixed use Condominium Building",
  //   credits: ["Structural Engineer – Louis Shell Structures"],
  //   description: [
  //     "Located on Wicker Park Avenue in the Wicker Park neighborhood of Chicago, Norsman developed, served as architect and builder on the construction of this 4-story new construction building with 3 wide residential flats and a ground floor commercial space.  The flats have German wood burning fireplaces, Italian kitchen cabinets, colorful Bertazzoni ranges, two terraces and 8’ x 20’ “lift and slide” doors on the front bay that open to the historic neighborhood beyond.  The entire building is clad with a corrugated metal rain-screen for a consistent look on the building’s entirety and offer a visible presence from the CTA blue line train tracks.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Lake Meadows",
  //   subHeading: "Four existing Residential Tower Campus and Amenity Renovation",
  //   credits: [],
  //   description: [
  //     "Norsman was employed to update the common areas and add new amenity spaces to breathe life into this Historic SOM designed Modernist apartment building campus on the South Side of Chicago.  A discreet addition of warm, black walnut CNC panels was added to the classic marble and terrazzo lobbies with a pattern inspired from the snow drifts of Lake Michigan which sits 2 blocks to the East.  A new leasing office was added to one of the buildings and new ground floor club rooms, exercise rooms and bike rooms were added to each building.  Historic photos of the property and its surrounding site were made into wallcoverings to adorn the Leasing office and reflect the campus’s rich history.  Corridor and apartment updates were also made with the amenity improvements, and all have helped to increase the rental income of the property by nearly 40%.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "St. Croix Falls Public Library",
  //   subHeading: "17,500 s.f. Adaptive Re-use Institutional Building",
  //   credits: [
  //     "Structural Engineer - Louis Shell Engineers",
  //     "MEP Engineers - IBC Engineering",
  //   ],
  //   description: [
  //     "This project entailed the adaptive re-use of a derelict grocery store located at the gateway to the historic downtown of this northern Wisconsin community of just over 2,000 residents.  With the rich Library program, Norsman took design cues from the community's interest in developing a progressive, sustainable vision for the community's future.  The library stacks meander like the adjacent St. Croix river to encourage chance discovery. The public plaza takes cues from the local landscape with varied landscape features including a white pine grove, reading mound, meditation garden and a stormwater riverlet that runs through the plaza to encourage child play and understanding of storm water management.",
  //     "Local prehistoric volcanic trap rock was included in the concrete mix for the plaza pavement and retaining walls in addition to the polished concrete floors of the Library's interior. Quotes from famous naturalist authors are sandblasted into the public plaza retaining walls to communicate for years to come.  The primary heating source for this cold climate locale is a solar thermal rooftop array that provides primary heat for the building's radiant floors.  Sound absorptive hanging ceiling panels are inversely cut from a topographic survey of the community's river valley.  Additional sustainable Highlights include super insulated roof, solar thermal rooftop array for primary radiant heat, local materials, recycled building, reduced impermeable site, recycled building materials, Solatube skylights and sunlight monitoring lighting controls and low-flow plumbing fixtures.",
  //   ],
  //   photoIDs: [],
  // },
  // {
  //   title: "Hermitage",
  //   subHeading: "4,000 s.f. Speculative Single-Family Residence",
  //   credits: ["Structural Engineer - Louis Shell Structures"],
  //   description: [
  //     "This ground up new construction single family home was developed, designed and built by Norsman.  This infill building is ideally located in the heart of the Bucktown neighborhood of Chicago and immediately south of the 606 Trail, a repurposed elevated rail-line turned park.  An open plan was created with a central light court that opens to a first-floor terrace.  A custom designed and detailed white oak stair serves all 4 floors, and an Italian open kitchen opens to the rear yard.  The entire home is clad in black concrete stucco and whitewashed cedar to give the building a clean, quiet modernist street presence.",
  //   ],
  //   photoIDs: [],
  // },
  {
    subHeading: "2,500 s.f. Restaurant Renovation",
    credits: [""],
    title: "Nonnina's",
    description: [
      "The owner’s of an existing restaurant employed our services to update and re-brand their existing Italian restaurant to Nonnina’s (Grandma’s in Italian).  Photos of the three owner’s Italian grandmothers were obtained and create a pixelated wallcovering backdrop to the new bar area.  All graphic design including logos, signage and menus were created by Norsman for the new restaurant concept.  The interior design of the space was inspired by classic Italian eateries in NYC and include red-velvet booths, wood lattice ceiling clouds and warm romantic interior finishes.  A private dining room has a neon sign with the words “Che Figata”, Italian slang for “how cool”.",
    ],
    photoIDs: [354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366],
  },
  {
    title: "Caffe Streets",
    subHeading: "1200 s.f. Commercial Café Design",
    credits: [""],
    description: [
      "Located on Wicker Park’s vibrant Division Street, Caffe Streets balances a “social” coffee house atmosphere with a highly functional Masters Barista bar designed for craft coffee making.  Reinforcing the owner’s belief that the street is a vital component of our urban community, elements of the street are brought into the cafe.   Above the chrome and dark wood of the coffee bar, the baristas’ work is illuminated by retrofitted Chicago streetlights while a wide storefront displays to the street the intimate 1,200 square foot interior space and backlit coffee bar.",
      "The layered marbled bamboo plywood ceiling is inspired by the baristas artistic pouring of steamed milk into coffee. Custom tables and chairs maximize the intimate seating of the café creating an intimate Chicago social third space.",
    ],
    photoIDs: [367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378],
  },
  {
    title: "Ridge",
    subHeading: "65,000 s.f. Multi-family Residential Development",
    credits: ["Structural Engineer  - C.E. Anderson Assoc's."],
    description: [
      "This 34-unit residential loft building sits on one of the oldest streets in Evanston at the juncture of an historic landmark residential neighborhood and the edge of the city’s urban center.  The design sets out to ease this juncture by terracing the addition away from residential district with 20 ft. setbacks creating expansive  Additionally, the existing residential tree canopy continues across the building with 24 roof top trees and a continuous balcony covered with a vegetated wall created with Green Screen. The building acts as an architectural green berm to the urban center.",
      "In contrast, the city facing elevation addresses the urban core taking cues from the existing street facade as well as the prehistoric shorelines of Lake Michigan on which it sits.  This city facade floors cantilever over the existing building with an undulating facade that is derived from the city’s historical shorelines.",
      "Sustainable Highlights: Passive sun shading, decreased impervious surfaces, stormwater detention, a ventilated facade and sustainable materials.",
    ],
    photoIDs: [379, 380, 381, 382, 383, 384, 385, 386, 387, 388],
  },
  {
    title: "Leavitt II",
    subHeading: "9,000 s.f. Adaptive Re-use Single Family Residence",
    credits: [
      "Structural Engineer - Louis Shell Structures",
      "Solar - Solar Service, Inc.",
      "Geo-thermal - TDH Mechanical",
    ],
    description: [
      "The adaptive re-use of this mixed-use building arose from the client's desire to build a single-family residence in the city for their growing family.  The building footprint was reduced with a cantilevered master suite to maximize the yard.  With an abundance of cubic feet to work with, two story spaces were carved from the existing building to bring light deep into the building and create an open plan.  The first floor plan radiates radiates around the kitchen core of the home, a gesture to the client's love of entertaining and cooking, and his professional training as a chef.",
      "Sustainable highlights:  Geothermal heating and cooling, solar thermal hot water, radiant floors throughout, recycled building, rooftop rainwater cistern, siding milled from existing buildings salvaged joists.",
    ],
    photoIDs: [
      389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403,
      404,
    ],
  },
  {
    title: "Hoffman Estates Clubhouse",
    subHeading: "3,400 s.f. New Construction Clubhouse facility",
    credits: [
      "Structural Engineer - Louis Shell Engineers",
      "MEPFP Engineers - The Engineering Studio, Inc.",
      "Landscape Architect - Wolff Landscape Architecture",
    ],
    description: [
      "The client's business model for apartment complex acquisitions is to re-position-tired properties with a dynamic clubhouse, apartments and landscaping.   Norsman has assisted with many of their new clubhouse designs including this clubhouse that was shoe-horned between existing apartment buildings.  The building was sited to maximize circulation, and the building opens up to the entry and pool deck areas with a king-truss framed tilted roof plane. The new clubhouse is fitted with custom components including an exposed structure, polished concrete floors, free form pool, birch bark inspired wall panels, pixilated floral wallpaper and a perforated leaf inspired ceiling cloud over the bar area.",
    ],
    photoIDs: [405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415],
  },
].map((project) => ({
  ...project,
  slug: generateSlug(project.title),
}));
