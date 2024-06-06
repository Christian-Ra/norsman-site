import "./App.scss";
import { Routes, Route, useMatch } from "react-router-dom";
import MenuBar from "./Components/menu/MenuBar";
import HomePage from "./Components/home/HomePage";
import ProjectPage from "./Components/portfolio/ProjectPage";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import { Projects } from "./ProjectList";

function App() {
  const match = useMatch("/norsman-site/projects/:id");
  const project = match
    ? Projects.find((project) => project.id === Number(match.params.id))
    : null;
  return (
    <div className='App'>
      <MenuBar />
      <Routes>
        <Route
          path='/norsman-site/projects/:id'
          element={<ProjectPage project={project} />}
        ></Route>
        <Route path='/norsman-site/contact' element={<Contact />}></Route>
        <Route path='/norsman-site/about' element={<About />}></Route>
        <Route path='/norsman-site' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
