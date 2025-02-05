import "./App.scss";
import {
  Routes,
  Route,
  useLocation,
  // ScrollRestoration,
} from "react-router-dom";
import MenuBar from "./Components/menu/MenuBar";
import HomePage from "./Components/home/HomePage";
import ProjectPage from "./Components/portfolio/ProjectPage";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Collage from "./Components/collage/Collage";
import ErrorPage from "./ErrorPage";
import { AnimatePresence } from "framer-motion";
import { Projects, Collections } from "./ProjectList";

function App() {
  // const match = useMatch("/norsman-site/projects/:id");
  const location = useLocation();
  // const projects = match
  //   ? Projects.find((project) => project.id === Number(match.params.id))
  //   : null;
  return (
    <div className="App">
      {/* <RouterProvider router={router}> */}
      <MenuBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/norsman-site/projects/:projectSlug"
            element={<ProjectPage projects={Projects} />}
          ></Route>
          <Route path="/norsman-site/contact" element={<Contact />}></Route>
          <Route
            path="/norsman-site/collections/:type"
            element={<Collage collections={Collections} />}
          ></Route>
          <Route path="/norsman-site/about" element={<About />}></Route>
          <Route path="/norsman-site/" element={<HomePage />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        {/* <ScrollRestoration
          getKey={(location, matches) => {
            const paths = ["/norsman-site"];
            return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
            location.pathname
            : // everything else by location like the browser
            location.key;
            }}
            /> */}
      </AnimatePresence>
      {/* </RouterProvider> */}
    </div>
  );
}

export default App;
