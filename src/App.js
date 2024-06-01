import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./Components/menu/MenuBar";
import HomePage from "./Components/home/HomePage";
import ProjectPage from "./Components/portfolio/ProjectPage";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <Router>
      <div className='App'>
        <MenuBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/project' element={<ProjectPage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
